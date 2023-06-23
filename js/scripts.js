let numeriCasuali = [];

    for (let i = 0; i < 10; i++) {
      let numeroCasuale = Math.floor(Math.random() * 11);
      numeriCasuali.push(numeroCasuale);
    }

    let numeriContainer = document.getElementById("numeri-container");
    numeriContainer.textContent = numeriCasuali.join(", ");

    setTimeout(function() {
        console.log("Sono passati 10 secondi!");
      }, 10 * 1000);
      