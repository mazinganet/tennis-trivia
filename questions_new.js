const newTennisQuestions = [
    // ==================== NUOVE DOMANDE DALL'IMMAGINE ====================
    { category: "Personal", question: "Chi dice sempre dai dai rifacciamo e dopo il 10 punto ancora nn è convinto?", answers: ["Russo Mario", "Spada Francesco", "Rossi Maurizio", "Zamagni Marco"], correct: 3 },
    { category: "Personal", question: "Chi è il miglior critico tennistico che analizza ogni dettaglio dei tuoi colpi?", answers: ["Rinaldi Roberto", "Urbinati Fabiano", "Renzi Roberto", "Sacchini Roberto"], correct: 3 },
    { category: "Personal", question: "Chi dice sempre non mi muovo più poi tira bordate come non ci fosse un domani?", answers: ["Piuma Marco", "Zamponi Luigi", "Urbinati Fabiano", "Bracciale David"], correct: 0 },
    { category: "Personal", question: "Chi dice sempre non mi muovo puoi recupera anche le palle in tribuna?", answers: ["Stefanelli Francesca", "Venditti Adolfo", "Razzani Erika", "Capicchioni A"], correct: 2 },
    { category: "Personal", question: "Chi gioca la palla così alta che serve il radar dell'aeroporto?", answers: ["Monticelli Ivano", "Brunelli Alberto", "Cantelli Ruggero", "Berardi Fabrizio"], correct: 1 },
    { category: "Personal", question: "Chi sembra tranquillo/a... ma dentro sta giocando una finale Slam?", answers: ["Urbinati Fabiano", "Bracciale David", "Renzi Roberto", "Spada Francesco"], correct: 2 },
    { category: "Personal", question: "Chi arriva sempre al campo super preparato?", answers: ["Gigi Rimolo", "Berardi Fabrizio", "Rinaldi Roberto", "Zamponi Luigi"], correct: 0 },
    { category: "Personal", question: "Chi è il giocatore dotato di maggior Fair Play?", answers: ["Garavini Marco", "Sacchini Roberto", "Tognacci Max", "Venditti Adolfo"], correct: 1 },
    { category: "Personal", question: "Chi ha il miglior diritto del circuito ATP?", answers: ["Garavini Marco", "Carlos Alcaraz", "Jannik Sinner", "Lazzarini Aldo"], correct: 0 },
    { category: "Personal", question: "Chi non mollerà MAI, nemmeno sul 5-0 40-0?", answers: ["Tognacci Max", "Russo Mario", "Zamponi Luigi", "Urbinati Fabiano"], correct: 0 },
    { category: "Personal", question: "Chi è la tennista più tenace del circuito?", answers: ["Stefanelli Francesca", "Belli Alice", "Gasponi Nadia", "Soriano Bernadette"], correct: 1 },
    { category: "Personal", question: "Chi sembra stanco ma poi vince?", answers: ["Berardi Fabrizio", "Spada Francesco", "Rossi Maurizio", "Bracciale David"], correct: 2 },
    { category: "Personal", question: "Chi è il giocatore con più taglio della palla?", answers: ["Rinaldi Roberto", "Daniil Medvedev", "Russo Mario", "Casper Ruud"], correct: 0 },
    { category: "Personal", question: "Chi carica di più il diritto con topspin?", answers: ["Garavini Marco", "Jannik Sinner", "Zamagni Marco", "Andrey Rublev"], correct: 2 },
    { category: "Personal", question: "Chi ha il miglior rovescio a 2 mani del circuito?", answers: ["Lazzarini Aldo", "Elena Rybakina", "Novak Djoković", "Barbieri Jessica"], correct: 3 },
    { category: "Personal", question: "Chi fa colpi di prestigio ogni volta che colpisce la palla?", answers: ["Soriano Bernadette", "Urbinati Fabiano", "Stefanelli Francesca", "Berardi Fabrizio"], correct: 0 },
    { category: "Personal", question: "Chi entra con il sorriso e comunque vada esce sempre con lo stesso sorriso?", answers: ["Sacchini Roberto", "Stefanelli Francesca", "Venditti Adolfo", "Gasponi Nadia"], correct: 1 },

    // ==================== SELEZIONE DAL PRIMO DATABASE ====================
    { category: "Tecnica", question: "Come si chiama il colpo eseguito al volo vicino alla rete?", answers: ["Volée", "Smash", "Lob", "Dritto"], correct: 0 },
    { category: "Tecnica", question: "Quale colpo si usa per scavalcare un avversario a rete?", answers: ["Lob (Pallonetto)", "Smorzata", "Passante", "Slice"], correct: 0 },
    { category: "Tecnica", question: "Quale punteggio indica la parità 40-40?", answers: ["Deuce", "Love", "Advantage", "Break"], correct: 0 },
    { category: "Tecnica", question: "Qual è il punteggio 'zero' nel tennis?", answers: ["Love", "Null", "Zero", "Ouch"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto l'Australian Open 2024 Maschile?", answers: ["Jannik Sinner", "Novak Djokovic", "Daniil Medvedev", "Carlos Alcaraz"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto il Roland Garros 2024 Maschile?", answers: ["Carlos Alcaraz", "Alexander Zverev", "Jannik Sinner", "Novak Djokovic"], correct: 0 },
    { category: "Risultati", question: "Chi detiene il record di titoli Slam maschili (24)?", answers: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"], correct: 0 },
    { category: "Risultati", question: "Quante volte Nadal ha vinto il Roland Garros?", answers: ["14", "13", "12", "15"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto 8 titoli a Wimbledon (record maschile)?", answers: ["Roger Federer", "Novak Djokovic", "Pete Sampras", "Björn Borg"], correct: 0 },
    { category: "Risultati", question: "Quale Italiano ha vinto la Coppa Davis nel 1976?", answers: ["Panatta, Barazzutti, Bertolucci, Zugarelli", "Sinner, Musetti, Berrettini", "Fognini, Bolelli, Seppi", "Pietrangeli, Sirola"], correct: 0 },
    { category: "Risultati", question: "In che anno l'Italia ha vinto la sua seconda Coppa Davis?", answers: ["2023", "2022", "2021", "2024"], correct: 0 },
    { category: "Risultati", question: "Chi è stato il primo italiano n.1 al mondo ATP?", answers: ["Jannik Sinner", "Adriano Panatta", "Nicola Pietrangeli", "Matteo Berrettini"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto l'Oro Olimpico singolare maschile a Parigi 2024?", answers: ["Novak Djokovic", "Carlos Alcaraz", "Lorenzo Musetti", "Alexander Zverev"], correct: 0 },
    { category: "Risultati", question: "Quale torneo completa il Grande Slam cronologicamente?", answers: ["US Open", "Australian Open", "Wimbledon", "Roland Garros"], correct: 0 },
    { category: "Risultati", question: "Qual è il torneo più antico del mondo?", answers: ["Wimbledon", "US Open", "Roland Garros", "Davis Cup"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto il singolare femminile a Wimbledon 2024?", answers: ["Barbora Krejcikova", "Jasmine Paolini", "Iga Swiatek", "Elena Rybakina"], correct: 0 },
    { category: "Risultati", question: "Chi è stata la prima finalista italiana a Wimbledon (2024)?", answers: ["Jasmine Paolini", "Flavia Pennetta", "Sara Errani", "Camila Giorgi"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto la medaglia di Bronzo a Parigi 2024 (Singolare Maschile)?", answers: ["Lorenzo Musetti", "Felix Auger-Aliassime", "Tommy Paul", "Casper Ruud"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto l'Oro nel doppio femminile a Parigi 2024?", answers: ["Errani / Paolini", "Gauff / Pegula", "Krejcikova / Siniakova", "Bucsa / Sorribes Tormo"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto lo US Open 2024 Maschile?", answers: ["Jannik Sinner", "Taylor Fritz", "Jack Draper", "Frances Tiafoe"], correct: 0 },
    { category: "Risultati", question: "Quanti Slam ha vinto Jannik Sinner nel 2024?", answers: ["2 (Aus Open, US Open)", "1", "3", "0"], correct: 0 },
    { category: "Risultati", question: "Chi ha vinto Wimbledon 2023 battendo Djokovic?", answers: ["Carlos Alcaraz", "Jannik Sinner", "Daniil Medvedev", "Holger Rune"], correct: 0 },
    { category: "Risultati", question: "Quale nazione ospita il Roland Garros?", answers: ["Francia", "Spagna", "Italia", "Svizzera"], correct: 0 },
    { category: "Risultati", question: "Quante settimane (totali) Steffi Graf è stata numero 1?", answers: ["377", "310", "332", "260"], correct: 0 }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = newTennisQuestions;
}
