let numeriCasuali = [];

for (let i = 0; i < 5; i++) {
    let numeroCasuale = Math.floor(Math.random() * 11);
    numeriCasuali.push(numeroCasuale);
}

let numeriContainer = document.getElementById("numeri-container");
numeriContainer.textContent = "Numeri generati: " + numeriCasuali.join(", ");

setTimeout(function () {
    numeriContainer.style.display = "none";
    console.log("Sono passati 5 secondi!");

    setTimeout(function () {
        let numeriUtente = [];
        for (let i = 0; i < 5; i++) {
            let numeroUtente = prompt("Digita il " + (i + 1) + "° numero:");
            numeriUtente.push(Number(numeroUtente));
        }

        console.log("Numeri inseriti dall'utente:", numeriUtente);

        let numeriCorrispondenti = [];
        let numeriIndovinati = [];
        for (let i = 0; i < numeriUtente.length; i++) {
            if (numeriCasuali.includes(numeriUtente[i])) {
                numeriCorrispondenti.push('<span class="numero-giusto">' + numeriUtente[i] + '</span>');
                numeriIndovinati.push(numeriUtente[i]);
            } else {
                numeriCorrispondenti.push('<span class="numero-sbagliato">' + numeriUtente[i] + '</span>');
            }
        }

        console.log("Numeri corrispondenti:", numeriCorrispondenti);

        let risultatoContainer = document.getElementById("risultato-container");
        risultatoContainer.innerHTML =
            '<span>Numeri generati: ' +
            numeriCasuali.join(", ") +
            "<br>" +
            "Numeri inseriti dall'utente: " +
            numeriCorrispondenti.join(", ") +
            "<br>" +
            "Numeri indovinati: " +
            numeriIndovinati.length + " (" + numeriIndovinati.join(", ") + ")" +
            "</span>";
    }, 0);
}, 5 * 1000);