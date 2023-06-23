let numeriCasuali = [];

for (let i = 0; i < 5; i++) {
  let numeroCasuale = Math.floor(Math.random() * 11); // Genera un numero casuale compreso tra 0 e 10
  numeriCasuali.push(numeroCasuale); // Aggiunge il numero casuale all'array
}

let numeriContainer = document.getElementById("numeri-container");
numeriContainer.textContent = numeriCasuali.join(", ");

setTimeout(function() {
  numeriContainer.style.display = "none"; // Nasconde i numeri
  console.log("Sono passati 10 secondi!");

  let numeriUtente = [];
  for (let i = 0; i < 5; i++) {
    let numeroUtente = prompt("Digita il " + (i + 1) + "° numero:");
    numeriUtente.push(numeroUtente);
  }

  console.log("Numeri inseriti dall'utente:", numeriUtente);
}, 10 * 1000);