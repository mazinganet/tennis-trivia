// ==================== Game State ====================
let gameState = {
    teams: [],
    currentQuestion: 0,
    totalQuestions: 15,
    questions: [],
    selectedAnswer: null,
    isAnswered: false
};

// Team colors array
const teamColors = ['#00d4aa', '#ff6b6b', '#4ecdc4', '#ffe66d'];

// ==================== DOM Elements ====================
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startGameBtn = document.getElementById('start-game');
const scoreboard = document.getElementById('scoreboard');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const teamSelectModal = document.getElementById('team-select-modal');
const teamButtons = document.getElementById('team-buttons');
const noAnswerBtn = document.getElementById('no-answer');
const resultOverlay = document.getElementById('result-overlay');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const categoryBadge = document.getElementById('category-badge');
const playAgainBtn = document.getElementById('play-again');
const newTeamsBtn = document.getElementById('new-teams');
const finalRankings = document.getElementById('final-rankings');
const confettiContainer = document.getElementById('confetti');

// ==================== Event Listeners ====================
startGameBtn.addEventListener('click', startGame);
noAnswerBtn.addEventListener('click', handleNoAnswer);
playAgainBtn.addEventListener('click', playAgain);
newTeamsBtn.addEventListener('click', newTeams);

// ==================== Game Functions ====================

function startGame() {
    // Get team names
    const team1 = document.getElementById('team1').value.trim() || 'Squadra 1';
    const team2 = document.getElementById('team2').value.trim() || 'Squadra 2';
    const team3 = document.getElementById('team3').value.trim();
    const team4 = document.getElementById('team4').value.trim();

    // Initialize teams
    gameState.teams = [
        { name: team1, score: 0, color: teamColors[0] },
        { name: team2, score: 0, color: teamColors[1] }
    ];

    if (team3) {
        gameState.teams.push({ name: team3, score: 0, color: teamColors[2] });
    }
    if (team4) {
        gameState.teams.push({ name: team4, score: 0, color: teamColors[3] });
    }

    // Get number of questions
    gameState.totalQuestions = parseInt(document.getElementById('num-questions').value);
    gameState.currentQuestion = 0;

    // Shuffle and select questions
    gameState.questions = shuffleArray([...tennisQuestions]).slice(0, gameState.totalQuestions);

    // Update UI
    totalQSpan.textContent = gameState.totalQuestions;

    // Create scoreboard
    createScoreboard();

    // Create team selection buttons
    createTeamButtons();

    // Switch screens
    switchScreen(setupScreen, gameScreen);

    // Show first question
    showQuestion();
}

function createScoreboard() {
    scoreboard.innerHTML = '';
    gameState.teams.forEach((team, index) => {
        const teamScore = document.createElement('div');
        teamScore.className = 'team-score';
        teamScore.id = `team-score-${index}`;
        teamScore.style.setProperty('--team-color', team.color);
        teamScore.innerHTML = `
            <div class="team-indicator"></div>
            <span class="team-name">${escapeHtml(team.name)}</span>
            <span class="team-points" id="points-${index}">${team.score}</span>
        `;
        scoreboard.appendChild(teamScore);
    });
}

function createTeamButtons() {
    teamButtons.innerHTML = '';
    gameState.teams.forEach((team, index) => {
        const btn = document.createElement('button');
        btn.className = 'team-btn';
        btn.style.setProperty('--team-color', team.color);
        btn.textContent = team.name;
        btn.addEventListener('click', () => handleTeamAnswer(index));
        teamButtons.appendChild(btn);
    });
}

function showQuestion() {
    if (gameState.currentQuestion >= gameState.totalQuestions) {
        endGame();
        return;
    }

    const question = gameState.questions[gameState.currentQuestion];
    gameState.isAnswered = false;
    gameState.selectedAnswer = null;

    // Update question counter
    currentQSpan.textContent = gameState.currentQuestion + 1;

    // Update category
    categoryBadge.textContent = question.category;

    // Show question with animation
    questionText.style.animation = 'none';
    questionText.offsetHeight; // Trigger reflow
    questionText.style.animation = 'questionIn 0.5s ease-out';
    questionText.textContent = question.question;

    // Create answer buttons
    answersContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-letter">${letters[index]}</span>${escapeHtml(answer)}`;
        btn.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(answerIndex) {
    if (gameState.isAnswered) return;

    gameState.selectedAnswer = answerIndex;

    // Highlight selected answer
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === answerIndex) {
            btn.style.borderColor = 'var(--primary)';
            btn.style.background = 'rgba(0, 212, 170, 0.2)';
        }
    });

    // Show team selection modal
    teamSelectModal.classList.add('active');
}

function handleTeamAnswer(teamIndex) {
    if (gameState.selectedAnswer === null) return;

    const question = gameState.questions[gameState.currentQuestion];
    const isCorrect = gameState.selectedAnswer === question.correct;

    gameState.isAnswered = true;
    teamSelectModal.classList.remove('active');

    // Show correct/wrong answer
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.classList.add('disabled');
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === gameState.selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) {
        // Add points
        gameState.teams[teamIndex].score += 10;
        updateScore(teamIndex);
        showResult(true, gameState.teams[teamIndex].name);
    } else {
        showResult(false, null, question.answers[question.correct]);
    }
}

function handleNoAnswer() {
    if (gameState.selectedAnswer === null) {
        teamSelectModal.classList.remove('active');
        return;
    }

    const question = gameState.questions[gameState.currentQuestion];

    gameState.isAnswered = true;
    teamSelectModal.classList.remove('active');

    // Show correct answer
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.classList.add('disabled');
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === gameState.selectedAnswer) {
            btn.classList.add('wrong');
        }
    });

    showResult(false, null, question.answers[question.correct]);
}

function updateScore(teamIndex) {
    const pointsEl = document.getElementById(`points-${teamIndex}`);
    const teamScoreEl = document.getElementById(`team-score-${teamIndex}`);

    pointsEl.textContent = gameState.teams[teamIndex].score;

    // Add animation
    teamScoreEl.classList.add('scored');
    setTimeout(() => teamScoreEl.classList.remove('scored'), 500);
}

function showResult(isCorrect, teamName, correctAnswer = null) {
    const resultIcon = document.getElementById('result-icon');
    const resultText = document.getElementById('result-text');
    const correctAnswerText = document.getElementById('correct-answer-text');

    resultOverlay.classList.remove('correct', 'wrong');
    resultOverlay.classList.add('active', isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
        resultIcon.textContent = '✓';
        resultText.textContent = `+10 punti per ${teamName}!`;
        correctAnswerText.textContent = '';
    } else {
        resultIcon.textContent = '✗';
        resultText.textContent = 'Risposta errata!';
        correctAnswerText.textContent = `La risposta corretta era: ${correctAnswer}`;
    }

    // Auto-hide and show next question
    setTimeout(() => {
        resultOverlay.classList.remove('active');
        gameState.currentQuestion++;
        showQuestion();
    }, 2500);
}

function endGame() {
    switchScreen(gameScreen, endScreen);

    // Sort teams by score
    const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);

    // Create rankings
    finalRankings.innerHTML = '';
    const positions = ['🥇', '🥈', '🥉', '4°'];
    const positionClasses = ['gold', 'silver', 'bronze', ''];

    sortedTeams.forEach((team, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        item.innerHTML = `
            <span class="ranking-position ${positionClasses[index] || ''}">${positions[index] || (index + 1) + '°'}</span>
            <span class="ranking-team">${escapeHtml(team.name)}</span>
            <span class="ranking-score">${team.score} punti</span>
        `;
        finalRankings.appendChild(item);
    });

    // Create confetti
    createConfetti();
}

function createConfetti() {
    confettiContainer.innerHTML = '';
    const colors = ['#00d4aa', '#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9f43', '#a55eea'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }
}

function playAgain() {
    // Reset scores
    gameState.teams.forEach(team => team.score = 0);
    gameState.currentQuestion = 0;

    // Shuffle questions again
    gameState.questions = shuffleArray([...tennisQuestions]).slice(0, gameState.totalQuestions);

    // Update scoreboard
    createScoreboard();

    // Switch to game screen
    switchScreen(endScreen, gameScreen);
    showQuestion();
}

function newTeams() {
    // Reset everything
    gameState.teams = [];
    gameState.currentQuestion = 0;

    // Clear inputs
    document.getElementById('team1').value = '';
    document.getElementById('team2').value = '';
    document.getElementById('team3').value = '';
    document.getElementById('team4').value = '';

    switchScreen(endScreen, setupScreen);
}

// ==================== Utility Functions ====================

function switchScreen(from, to) {
    from.classList.remove('active');
    to.classList.add('active');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== Keyboard Support ====================
document.addEventListener('keydown', (e) => {
    if (!gameScreen.classList.contains('active')) return;
    if (gameState.isAnswered) return;

    const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, '1': 0, '2': 1, '3': 2, '4': 3 };
    const key = e.key.toLowerCase();

    if (keyMap.hasOwnProperty(key)) {
        selectAnswer(keyMap[key]);
    }
});
