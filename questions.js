// Database di domande sul Tennis (Livello: MOLTO DIFFICILE)
const tennisQuestions = [
    // ==================== TECNICA AVANZATA ====================
    {
        category: "Tecnica",
        question: "Cosa misura esattamente il 'Swingweight' di una racchetta?",
        answers: ["La resistenza alla rotazione attorno a un asse a 10cm dal tappo (inerzia)", "Il peso statico della racchetta incordata", "Il bilanciamento verso la testa", "La rigidità torsionale del telaio"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Qual è l'angolo approssimativo di flessione del ginocchio nella 'Trophy Position' ideale per massimizzare la spinta?",
        answers: ["90 gradi", "110-120 gradi", "135-145 gradi", "160 gradi"],
        correct: 1
    },
    {
        category: "Tecnica",
        question: "Nel dritto in Topspin, quanti RPM (giri al minuto) medi generava il dritto di Rafael Nadal al Roland Garros nelle annate migliori?",
        answers: ["Circa 2500 RPM", "Circa 3200 RPM", "Oltre 5000 RPM", "Circa 1800 RPM"],
        correct: 1
    },
    {
        category: "Tecnica",
        question: "Cosa si intende in biomeccanica tennistica con il termine 'Stretch-Shortening Cycle' (SSC)?",
        answers: ["Il pre-stiramento muscolare che aumenta la forza di contrazione durante il colpo", "Il ciclo di respirazione durante gli scambi lunghi", "La routine di stretching post-partita", "L'accorciamento del movimento in risposta a palle veloci"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Quale impugnatura prevede che la 'base knuckle' dell'indice sia posizionata sul lato (bevel) numero 5 del manico (per un destro)?",
        answers: ["Eastern Forehand", "Semi-Western", "Western", "Continental"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Se aumenti la tensione delle corde di 2 kg mantenendo uguale la racchetta, cosa succede fisicamente al tempo di permanenza (dwell time) della palla sulle corde?",
        answers: ["Diminuisce", "Aumenta", "Rimane invariato", "Dipende solo dalla temperatura"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Quale legge fisica spiega perché una pallina in topspin 'cade' più velocemente nel campo avversario?",
        answers: ["Effetto Magnus", "Effetto Doppler", "Principio di Bernoulli", "Legge di Newton"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Nella catena cinetica del servizio, quale parte del corpo dovrebbe teoricamente frenare per trasferire velocità al segmento successivo (braccio/racchetta)?",
        answers: ["Il tronco/spalla", "Il polso", "I piedi", "La testa"],
        correct: 0
    },

    // ==================== RISULTATI STORICI E RECORD (HARD) ====================
    {
        category: "Risultati",
        question: "Quale fu il punteggio esatto del leggendario tie-break del quarto set nella finale di Wimbledon 1980 tra Borg e McEnroe?",
        answers: ["16-14", "18-16", "20-18", "15-13"],
        correct: 1
    },
    {
        category: "Risultati",
        question: "Chi detiene il record per il match di singolare femminile più breve della storia dell'Era Open (Finale Roland Garros 1988)?",
        answers: ["Graf b. Zvereva (32 minuti)", "Navratilova b. Evert (40 minuti)", "S. Williams b. Sharapova (45 minuti)", "Hingis b. Pierce (38 minuti)"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "In quale anno è stato introdotto per la prima volta il tie-break a Wimbledon?",
        answers: ["1971", "1968", "1973", "1979"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quale giocatore ha vinto il titolo di singolare maschile alle Olimpiadi di Parigi 1924?",
        answers: ["Vincent Richards", "René Lacoste", "Jean Borotra", "Bill Tilden"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Chi è l'unico giocatore ad aver vinto due volte il 'Calendar Grand Slam' (tutti e 4 gli Slam nello stesso anno) nel singolare maschile?",
        answers: ["Rod Laver", "Don Budge", "Roger Federer", "Novak Djokovic"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quale fu il punteggio del set finale (5°) nel match più lungo della storia (Isner-Mahut 2010)?",
        answers: ["68-66", "70-68", "72-70", "64-62"],
        correct: 1
    },
    {
        category: "Risultati",
        question: "Chi ha sconfitto Rafael Nadal per la prima volta in assoluto al Roland Garros (2009)?",
        answers: ["Robin Söderling", "Novak Djokovic", "Roger Federer", "Stan Wawrinka"],
        correct: 0
    },
    {
        category: "Risultati",
        question: "Quante settimane consecutive Roger Federer ha trascorso al n. 1 del ranking ATP (Record)?",
        answers: ["237", "200", "286", "160"],
        correct: 0
    }
];

// Export for Node.js (server-side)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tennisQuestions;
}
