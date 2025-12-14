const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const os = require('os');

// Load questions module
const tennisQuestions = require('./questions.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.join(__dirname)));

// ==================== GAME STATE ====================
let gameState = {
  presenter: null,
  teams: {}, // socket.id -> { name, score, color, connected }
  questions: [],
  currentQuestionIndex: -1,
  currentQuestion: null,
  answers: {}, // socket.id -> answerIndex
  gameStarted: false,
  phase: 'setup', // setup, question, result, gameover
  colors: ['#00d4aa', '#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9f43', '#a55eea', '#5f27cd', '#54a0ff', '#2e86de', '#ee5253']
};

// ==================== HELPER FUNCTIONS ====================
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getTeamList() {
  return Object.values(gameState.teams).filter(t => t.connected).sort((a, b) => b.score - a.score);
}

function getNextColor() {
  const usedColors = Object.values(gameState.teams).map(t => t.color);
  const available = gameState.colors.filter(c => !usedColors.includes(c));
  return available.length > 0 ? available[0] : gameState.colors[Math.floor(Math.random() * gameState.colors.length)];
}

// ==================== SOCKET LOGIC ====================
io.on('connection', (socket) => {
  console.log('Connection:', socket.id);

  // PRESENTER
  socket.on('presenter:join', () => {
    gameState.presenter = socket.id;
    socket.join('presenter');

    // Send current state
    socket.emit('presenter:state', {
      phase: gameState.phase,
      teams: getTeamList(),
      currentQuestion: gameState.currentQuestion,
      answersCount: Object.keys(gameState.answers).length
    });
  });

  socket.on('presenter:startGame', (numQuestions) => {
    gameState.questions = shuffleArray(tennisQuestions).slice(0, numQuestions || 15);
    gameState.currentQuestionIndex = -1;
    gameState.gameStarted = true;
    gameState.phase = 'game';

    // Reset scores
    Object.values(gameState.teams).forEach(t => t.score = 0);

    // Reset answers
    gameState.answers = {};

    // Notify all
    io.emit('game:started', { totalQuestions: gameState.questions.length });
    io.to('presenter').emit('presenter:updateTeams', getTeamList());

    // Start first question immediately
    nextQuestion();
  });

  socket.on('presenter:next', () => {
    if (gameState.phase === 'result') {
      nextQuestion();
    } else if (gameState.phase === 'question') {
      showResults();
    }
  });

  function nextQuestion() {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex >= gameState.questions.length) {
      endGame();
      return;
    }

    gameState.phase = 'question';
    gameState.answers = {};

    const q = gameState.questions[gameState.currentQuestionIndex];
    gameState.currentQuestion = {
      index: gameState.currentQuestionIndex + 1,
      total: gameState.questions.length,
      category: q.category,
      question: q.question,
      answers: q.answers,
      // Don't send 'correct' yet to players
    };

    // Notify Presenter
    io.to('presenter').emit('game:question', {
      ...gameState.currentQuestion,
      correct: q.correct // Presenter always knows
    });

    // Notify Players
    io.to('players').emit('game:question', {
      index: gameState.currentQuestion.index,
      total: gameState.currentQuestion.total,
      category: gameState.currentQuestion.category,
      question: gameState.currentQuestion.question,
      answers: gameState.currentQuestion.answers
    });
  }

  function showResults() {
    gameState.phase = 'result';
    const q = gameState.questions[gameState.currentQuestionIndex];
    const correctAnswer = q.correct;

    // Calculate scores
    let roundResults = []; // { teamName, correct, earned }

    Object.keys(gameState.answers).forEach(socketId => {
      const team = gameState.teams[socketId];
      if (!team) return;

      const answer = gameState.answers[socketId];
      const isCorrect = answer === correctAnswer;

      if (isCorrect) {
        team.score += 10;
      }

      roundResults.push({
        teamId: socketId,
        isCorrect: isCorrect
      });
    });

    // Notify Presenter (updated scoreboard)
    io.to('presenter').emit('game:result', {
      correctAnswer: correctAnswer,
      teams: getTeamList()
    });

    // Notify Players (individual feedback)
    io.to('players').emit('game:result', {
      correctAnswer: correctAnswer,
      correctAnswerText: q.answers[correctAnswer]
    });

    // Send specific result to each player
    roundResults.forEach(res => {
      io.to(res.teamId).emit('player:feedback', {
        correct: res.isCorrect,
        score: gameState.teams[res.teamId].score
      });
    });
  }

  function endGame() {
    gameState.phase = 'gameover';
    gameState.gameStarted = false;

    io.emit('game:over', {
      teams: getTeamList()
    });
  }

  socket.on('presenter:resetGame', () => {
    // Full reset
    gameState.gameStarted = false;
    gameState.phase = 'setup';
    gameState.teams = {};
    gameState.questions = [];
    gameState.currentQuestionIndex = -1;
    gameState.currentQuestion = null;
    gameState.answers = {};

    // Notify all to reset
    io.emit('game:reset');

    // Update presenter
    io.to('presenter').emit('presenter:state', {
      phase: 'setup',
      teams: [],
      currentQuestion: null,
      answersCount: 0
    });

    console.log('Game reset by presenter');
  });

  // PLAYERS (TEAMS)
  socket.on('player:join', (teamName) => {
    const name = teamName || `Squadra ${Object.keys(gameState.teams).length + 1}`;

    // Check for reconnection (same name)
    let existingId = Object.keys(gameState.teams).find(id => gameState.teams[id].name === name);

    if (existingId) {
      // Reconnect logic: update socket ID
      const oldData = gameState.teams[existingId];
      delete gameState.teams[existingId]; // Remove old ID key

      gameState.teams[socket.id] = {
        ...oldData,
        id: socket.id,
        connected: true
      };

      // If they had an answer recorded under old ID, move it
      if (gameState.answers[existingId] !== undefined) {
        gameState.answers[socket.id] = gameState.answers[existingId];
        delete gameState.answers[existingId];
      }

      console.log(`Team ${name} reconnected (ID: ${existingId} -> ${socket.id})`);
    } else {
      // New registration
      gameState.teams[socket.id] = {
        id: socket.id,
        name: name,
        score: 0,
        color: getNextColor(),
        connected: true
      };
      console.log(`Team ${name} joined (ID: ${socket.id})`);
    }

    socket.join('players');
    socket.emit('player:registered', gameState.teams[socket.id]);

    // Notify presenter
    io.to('presenter').emit('presenter:updateTeams', getTeamList());

    // If game is in progress, sync player
    if (gameState.gameStarted) {
      socket.emit('game:started', { totalQuestions: gameState.questions.length });
      if (gameState.phase === 'question') {
        socket.emit('game:question', {
          index: gameState.currentQuestion.index,
          total: gameState.currentQuestion.total,
          category: gameState.currentQuestion.category,
          question: gameState.currentQuestion.question,
          answers: gameState.currentQuestion.answers
        });
      } else if (gameState.phase === 'result') {
        // Send last result
        socket.emit('game:result', {
          correctAnswer: gameState.currentQuestion.correct,
          correctAnswerText: gameState.currentQuestion.answers[gameState.currentQuestion.correct]
        });
      }
    }
  });

  socket.on('player:leave', () => {
    if (gameState.teams[socket.id]) {
      console.log(`Team ${gameState.teams[socket.id].name} left manually`);
      delete gameState.teams[socket.id];
      delete gameState.answers[socket.id];

      socket.leave('players');
      // Notify presenter
      io.to('presenter').emit('presenter:updateTeams', getTeamList());
      io.to('presenter').emit('presenter:answerUpdate', {
        answered: Object.keys(gameState.answers).length,
        total: Object.keys(gameState.teams).filter(id => gameState.teams[id].connected).length
      });
    }
  });

  socket.on('player:answer', (answerIndex) => {
    if (gameState.phase !== 'question') return;
    if (gameState.answers[socket.id] !== undefined) return; // Already answered

    gameState.answers[socket.id] = answerIndex;

    // Notify player
    socket.emit('player:answerReceived');

    // Notify presenter (update counts)
    io.to('presenter').emit('presenter:answerUpdate', {
      answered: Object.keys(gameState.answers).length,
      total: Object.keys(gameState.teams).filter(id => gameState.teams[id].connected).length
    });
  });

  socket.on('disconnect', () => {
    if (gameState.teams[socket.id]) {
      gameState.teams[socket.id].connected = false;
      // Notify presenter but don't delete immediately (wait for reconnect)
      io.to('presenter').emit('presenter:updateTeams', getTeamList());
      console.log(`Team ${gameState.teams[socket.id].name} disconnected (waiting for reconnect)`);
    }
  });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  // Find local IP
  const interfaces = os.networkInterfaces();
  let localIP = 'localhost';
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        localIP = iface.address;
        break;
      }
    }
    if (localIP !== 'localhost') break;
  }

  console.log(`\n🎾 Tennis Trivia Server (Team Mode) running on port ${PORT}`);
  console.log(`\n🔴 PRESENTATORE (PC):   http://localhost:${PORT}/presenter.html`);
  console.log(`🔵 SQUADRA (Cellulare): http://${localIP}:${PORT}/player.html\n`);
});
