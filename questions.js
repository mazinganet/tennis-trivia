// Database di domande sul Tennis (Livello: RISULTATI & TECNICA BASE)
const tennisQuestions = [
    // ==================== TECNICA (PIÙ FACILE) ====================
    {
        category: "Tecnica",
        question: "Come si chiama il colpo potente eseguito sopra la testa, simile al servizio?",
        answers: ["Smash", "Volée", "Lob", "Drop shot"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Quale effetto fa rimbalzare la palla alta e la spinge in avanti?",
        answers: ["Topspin", "Backspin (Slice)", "Piatto", "Sidespin"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Dove ci si posiziona solitamente per eseguire una Volée?",
        answers: ["Vicino alla rete", "Dietro la linea di fondo", "Nel corridoio", "Fuori dal campo"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Come si chiama il punteggio di 40-40 in un game?",
        answers: ["Deuce (Parità)", "Tie-break", "Advantage", "Match point"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Quale colpo si usa per scavalcare un avversario che si trova a rete?",
        answers: ["Lob (Pallonetto)", "Smash", "Passing shot", "Smorzata"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "A quanti punti arriva (minimo) un Tie-break standard?",
        answers: ["7", "10", "6", "15"],
        correct: 0
    },

    // ==================== RISULTATI & STORIA (PIÙ DOMANDE) ====================
    {
        category: "Risultati",
        question: "Chi ha vinto l'Australian Open 2024 (Primo Slam in carriera)?",
        answers: ["Jannik Sinner", "Carlos Alcaraz", "Daniil Medvedev", "Novak Djokovic"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "In quale anno l'Italia ha vinto la sua seconda Coppa Davis (guidata da Sinner)?",
        answers: ["2023", "2022", "2021", "2024"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quanti titoli del Grande Slam ha vinto Novak Djokovic (record maschile)?",
        answers: ["24", "22", "20", "25"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quale torneo ha vinto Adriano Panatta nel 1976?",
        answers: ["Roland Garros", "Wimbledon", "US Open", "Australian Open"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi detiene il record di vittorie maschili a Wimbledon (8 titoli)?",
        answers: ["Roger Federer", "Pete Sampras", "Novak Djokovic", "Björn Borg"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quale tennista italiano ha raggiunto la finale di Wimbledon nel 2021?",
        answers: ["Matteo Berrettini", "Jannik Sinner", "Lorenzo Musetti", "Fabio Fognini"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi ha vinto l'Oro Olimpico nel singolare maschile a Parigi 2024?",
        answers: ["Novak Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Alexander Zverev"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quante volte Rafael Nadal ha vinto il Roland Garros?",
        answers: ["14", "10", "12", "15"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi ha vinto la storica finale di Wimbledon 2008 (considerata la più bella di sempre)?",
        answers: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Andy Murray"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quale giocatrice ha completato il 'Golden Slam' (4 Slam + Oro Olimpico) nel 1988?",
        answers: ["Steffi Graf", "Serena Williams", "Martina Navratilova", "Monica Seles"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi è diventato il più giovane numero 1 della storia ATP?",
        answers: ["Carlos Alcaraz", "Lleyton Hewitt", "Jannik Sinner", "Marat Safin"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quale nazione ha vinto la Coppa Davis 2023?",
        answers: ["Italia", "Australia", "Serbia", "Spagna"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi ha impedito a Novak Djokovic di fare il 'Calendar Grand Slam' vincendo lo US Open 2021?",
        answers: ["Daniil Medvedev", "Alexander Zverev", "Stefanos Tsitsipas", "Dominic Thiem"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi è l'ultimo americano ad aver vinto uno Slam maschile (US Open 2003)?",
        answers: ["Andy Roddick", "Andre Agassi", "Pete Sampras", "Taylor Fritz"],
        correct: 0
    }
];

// Export for Node.js (server-side)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tennisQuestions;
}
