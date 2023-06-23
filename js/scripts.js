var numeriCasuali = [];

for (var i = 0; i < 10; i++) {
  var numeroCasuale = Math.floor(Math.random() * 11); // Genera un numero casuale compreso tra 0 e 10
  numeriCasuali.push(numeroCasuale); // Aggiunge il numero casuale all'array
}

console.log(numeriCasuali);
