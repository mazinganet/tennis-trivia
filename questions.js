// Database di domande sul Tennis
const tennisQuestions = [
    // ==================== GIOCATORI ====================
    {
        category: "Giocatori",
        question: "Quanti titoli del Grande Slam ha vinto Roger Federer in carriera?",
        answers: ["18", "20", "21", "17"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "In quale anno Rafael Nadal ha vinto il suo primo Roland Garros?",
        answers: ["2004", "2005", "2006", "2007"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "Di quale paese è originario Novak Djokovic?",
        answers: ["Croazia", "Serbia", "Bosnia", "Montenegro"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "Chi è stato il primo tennista italiano a vincere un torneo Masters 1000?",
        answers: ["Jannik Sinner", "Matteo Berrettini", "Fabio Fognini", "Adriano Panatta"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Jannik Sinner ha vinto il suo primo Slam a quale torneo?",
        answers: ["Wimbledon", "US Open", "Australian Open", "Roland Garros"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Chi detiene il record di settimane consecutive al numero 1 del ranking ATP?",
        answers: ["Roger Federer", "Novak Djokovic", "Pete Sampras", "Jimmy Connors"],
        correct: 0
    },
    {
        category: "Giocatori",
        question: "Quale tennista è soprannominato 'Il Re della Terra Rossa'?",
        answers: ["Novak Djokovic", "Carlos Alcaraz", "Rafael Nadal", "Björn Borg"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Chi ha vinto il Golden Slam (4 Slam + Oro Olimpico) nel 1988?",
        answers: ["Martina Navratilova", "Steffi Graf", "Chris Evert", "Monica Seles"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "Quanti Roland Garros ha vinto Rafael Nadal?",
        answers: ["12", "13", "14", "15"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Chi è il tennista più giovane ad aver raggiunto la posizione numero 1 del mondo?",
        answers: ["Carlos Alcaraz", "Jannik Sinner", "Lleyton Hewitt", "Boris Becker"],
        correct: 0
    },
    {
        category: "Giocatori",
        question: "Quale tennista ha vinto Wimbledon a soli 17 anni?",
        answers: ["Pete Sampras", "Andre Agassi", "Boris Becker", "John McEnroe"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Chi ha vinto l'Australian Open 2024 maschile?",
        answers: ["Novak Djokovic", "Daniil Medvedev", "Jannik Sinner", "Carlos Alcaraz"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Quale tennista italiano ha raggiunto la finale di Wimbledon 2021?",
        answers: ["Jannik Sinner", "Matteo Berrettini", "Lorenzo Sonego", "Fabio Fognini"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "Chi è stato il primo tennista a vincere il Career Golden Slam maschile?",
        answers: ["Roger Federer", "Rafael Nadal", "Andre Agassi", "Novak Djokovic"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Quanti Slam ha vinto Serena Williams?",
        answers: ["21", "22", "23", "24"],
        correct: 2
    },
    {
        category: "Giocatori",
        question: "Chi è il tennista con più vittorie in carriera sull'erba?",
        answers: ["Pete Sampras", "Roger Federer", "Boris Becker", "John McEnroe"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "Quale ex numero 1 del mondo è anche DJ professionista?",
        answers: ["Andy Roddick", "Marat Safin", "Lleyton Hewitt", "Gustavo Kuerten"],
        correct: 1
    },
    {
        category: "Giocatori",
        question: "Chi ha battuto Federer nella storica finale di Wimbledon 2008?",
        answers: ["Novak Djokovic", "Andy Murray", "Rafael Nadal", "Andy Roddick"],
        correct: 2
    },

    // ==================== TECNICA ====================
    {
        category: "Tecnica",
        question: "Come si chiama il colpo eseguito al volo vicino alla rete?",
        answers: ["Smash", "Volée", "Lob", "Drop shot"],
        correct: 1
    },
    {
        category: "Tecnica",
        question: "Qual è il nome del colpo che passa sopra la testa dell'avversario a rete?",
        answers: ["Lob", "Smash", "Passing shot", "Slice"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Come si chiama l'effetto che fa rimbalzare la palla bassa e veloce?",
        answers: ["Topspin", "Slice", "Flat", "Kick"],
        correct: 1
    },
    {
        category: "Tecnica",
        question: "Quale impugnatura è più usata per il servizio moderno?",
        answers: ["Eastern", "Western", "Continental", "Semi-Western"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Come si chiama il colpo smorzato che cade vicino alla rete?",
        answers: ["Lob", "Slice", "Drop shot", "Passing shot"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Qual è l'effetto che fa rimbalzare la palla alta con rotazione in avanti?",
        answers: ["Slice", "Flat", "Topspin", "Backspin"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Come si chiama il rovescio eseguito con una sola mano?",
        answers: ["One-handed backhand", "Two-handed backhand", "Half volley", "Slice backhand"],
        correct: 0
    },
    {
        category: "Tecnica",
        question: "Qual è il nome del colpo che passa l'avversario a rete lungo la linea o in diagonale?",
        answers: ["Drop shot", "Lob", "Passing shot", "Winner"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Come si chiama il colpo potente eseguito sopra la testa?",
        answers: ["Volée", "Smash", "Lob", "Slice"],
        correct: 1
    },
    {
        category: "Tecnica",
        question: "Quale tipo di servizio ha più effetto kick?",
        answers: ["Servizio piatto", "Servizio slice", "Servizio kick", "Servizio a cucchiaio"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Come si chiama il colpo giocato subito dopo il rimbalzo della palla?",
        answers: ["Volée", "Half volley", "Drop shot", "Approach shot"],
        correct: 1
    },
    {
        category: "Tecnica",
        question: "Qual è la zona del campo chiamata 'terra di nessuno'?",
        answers: ["Dietro la linea di fondo", "Vicino alla rete", "Tra la linea di fondo e la rete", "I corridoi laterali"],
        correct: 2
    },
    {
        category: "Tecnica",
        question: "Cosa significa 'ace' nel tennis?",
        answers: ["Punto diretto di servizio", "Doppio fallo", "Palla break", "Volée vincente"],
        correct: 0
    },

    // ==================== TORNEI ====================
    {
        category: "Tornei",
        question: "Su quale superficie si gioca Wimbledon?",
        answers: ["Terra rossa", "Cemento", "Erba", "Sintetico"],
        correct: 2
    },
    {
        category: "Tornei",
        question: "In quale città si gioca il Roland Garros?",
        answers: ["Londra", "New York", "Melbourne", "Parigi"],
        correct: 3
    },
    {
        category: "Tornei",
        question: "Quanti tornei del Grande Slam ci sono in una stagione?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        category: "Tornei",
        question: "Su quale superficie si gioca l'Australian Open?",
        answers: ["Erba", "Terra rossa", "Cemento", "Sintetico indoor"],
        correct: 2
    },
    {
        category: "Tornei",
        question: "Quale Slam si gioca per ultimo nell'anno?",
        answers: ["Australian Open", "Roland Garros", "Wimbledon", "US Open"],
        correct: 3
    },
    {
        category: "Tornei",
        question: "Dove si tengono le ATP Finals?",
        answers: ["Londra", "Torino", "New York", "Dubai"],
        correct: 1
    },
    {
        category: "Tornei",
        question: "Qual è il torneo più antico del mondo?",
        answers: ["US Open", "Roland Garros", "Wimbledon", "Australian Open"],
        correct: 2
    },
    {
        category: "Tornei",
        question: "In quale mese si gioca il Roland Garros?",
        answers: ["Gennaio", "Maggio-Giugno", "Luglio", "Settembre"],
        correct: 1
    },
    {
        category: "Tornei",
        question: "Quale torneo italiano fa parte dei Masters 1000?",
        answers: ["Roma", "Milano", "Torino", "Bologna"],
        correct: 0
    },
    {
        category: "Tornei",
        question: "Quale Slam utilizza il tie-break nel set decisivo?",
        answers: ["Wimbledon", "Roland Garros", "US Open", "Australian Open"],
        correct: 2
    },

    // ==================== REGOLE ====================
    {
        category: "Regole",
        question: "Quanti set bisogna vincere per aggiudicarsi un match di Slam maschile?",
        answers: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        category: "Regole",
        question: "A che punteggio si gioca il tie-break?",
        answers: ["5-5", "6-6", "7-7", "4-4"],
        correct: 1
    },
    {
        category: "Regole",
        question: "Quanti falli di servizio consecutivi causano la perdita del punto?",
        answers: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        category: "Regole",
        question: "Come si chiama il punteggio 40-40?",
        answers: ["Parità", "Deuce", "Vantaggio", "Love"],
        correct: 1
    },
    {
        category: "Regole",
        question: "Cosa significa 'Love' nel punteggio del tennis?",
        answers: ["15", "30", "Zero", "Vantaggio"],
        correct: 2
    },
    {
        category: "Regole",
        question: "Quanti punti servono per vincere un game (partendo da 0-0)?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        category: "Regole",
        question: "Cosa succede se la palla tocca la rete durante il servizio e finisce nella casella corretta?",
        answers: ["Punto per chi riceve", "Doppio fallo", "Let, si ripete", "Ace"],
        correct: 2
    },
    {
        category: "Regole",
        question: "Quanti game bisogna vincere per aggiudicarsi un set (con 2 game di vantaggio)?",
        answers: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        category: "Regole",
        question: "Quanto tempo ha il giocatore tra un punto e l'altro per servire?",
        answers: ["15 secondi", "20 secondi", "25 secondi", "30 secondi"],
        correct: 2
    },
    {
        category: "Regole",
        question: "Il tie-break viene vinto da chi arriva primo a quanti punti (con 2 di vantaggio)?",
        answers: ["5", "6", "7", "10"],
        correct: 2
    },

    // ==================== STORIA ====================
    {
        category: "Storia",
        question: "In che anno è stato fondato il torneo di Wimbledon?",
        answers: ["1877", "1881", "1900", "1920"],
        correct: 0
    },
    {
        category: "Storia",
        question: "Chi è considerato il padre del tennis moderno in Italia?",
        answers: ["Nicola Pietrangeli", "Adriano Panatta", "Corrado Barazzutti", "Paolo Bertolucci"],
        correct: 0
    },
    {
        category: "Storia",
        question: "In che anno l'Italia ha vinto la sua prima Coppa Davis?",
        answers: ["1970", "1972", "1976", "1980"],
        correct: 2
    },
    {
        category: "Storia",
        question: "Chi ha vinto il primo US Open dell'Era Open nel 1968?",
        answers: ["Rod Laver", "Arthur Ashe", "Ken Rosewall", "John Newcombe"],
        correct: 1
    },
    {
        category: "Storia",
        question: "Quale tennista ha completato il Grande Slam due volte in carriera?",
        answers: ["Björn Borg", "Rod Laver", "Pete Sampras", "Roger Federer"],
        correct: 1
    },
    {
        category: "Storia",
        question: "Quando è iniziata l'Era Open del tennis?",
        answers: ["1960", "1968", "1975", "1980"],
        correct: 1
    }
];

// Export for Node.js (server-side)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tennisQuestions;
}
