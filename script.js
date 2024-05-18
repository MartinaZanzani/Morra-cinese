//puntatori

// let sceltaCPU = Math.floor(Math.random()*3);


const sassoUtente = document.getElementById("sasso-utente");
const cartaUtente = document.getElementById("carta-utente");
const forbiciUtente = document.getElementById ("forbici-utente");

const sassoCPU = document.getElementById("sasso-cpu");
const cartaCPU = document.getElementById("carta-cpu");
const forbiciCPU = document.getElementById("forbici-cpu");

const risultato = document.getElementById("risultato");
const frase = document.getElementById("frase");

//l'utente sceglie: sasso

sassoUtente.addEventListener("click", function() {
    let sceltaCPU = Math.floor(Math.random()*3);

    cartaUtente.style.display = "none"; 
    forbiciUtente.style.display ="none";
    sassoUtente.style.margin="auto";
    // confronto con mosse CPU: 0 = sasso, 1 = carta, 2 = forbici
    if (sceltaCPU === 0) {
        cartaCPU.style.display = "none";
        forbiciCPU.style.display = "none";
        sassoCPU.style.margin = "auto"; 

        risultato.textContent = "PAREGGIO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";
    
    } else if (sceltaCPU === 1) {
        sassoCPU.style.display = "none";
        forbiciCPU.style.display = "none";
        cartaCPU.style.margin = "auto";

        risultato.textContent = "HAI PERSO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";

    } else if (sceltaCPU === 2) {
        forbiciCPU.style.margin = "auto";
        sassoCPU.style.display = "none";
        cartaCPU.style.display = "none"; 

        risultato.textContent = "HAI VINTO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";
    }


})

//l'utente sceglie: carta

cartaUtente.addEventListener("click", function() {
    let sceltaCPU = Math.floor(Math.random()*3);
    
    sassoUtente.style.display = "none";
    forbiciUtente.style.display = "none";
    cartaUtente.style.margin = "auto";
    // confronto con mosse CPU: 0 = sasso, 1 = carta, 2 = forbici
    if (sceltaCPU === 0) {
        sassoCPU.style.margin = "auto";
        cartaCPU.style.display = "none"; 
        forbiciCPU.style.display = "none"; 

        risultato.textContent = "HAI VINTO!"; 
        frase.textContent = "Aggiorna la pagina per giocare ancora.";


    } else if (sceltaCPU === 1) {
        sassoCPU.style.display = "none"; 
        cartaCPU.style.margin = "auto";
        forbiciCPU.style.display = "none"; 

        risultato.textContent = "PAREGGIO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";


    } else if (sceltaCPU === 2) {
        sassoCPU.style.display = "none"; 
        cartaCPU.style.display = "none"; 
        forbiciCPU.style.margin = "auto";

        risultato.textContent = "HAI PERSO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";


    }
})

//l'utente sceglie: forbici

forbiciUtente.addEventListener("click", function() {
    let sceltaCPU = Math.floor(Math.random()*3);

    sassoUtente.style.display = "none";   
    cartaUtente.style.display = "none";
    forbiciUtente.style.margin = "auto"; 
    // confronto con mosse CPU: 0 = sasso, 1 = carta, 2 = forbici
    if(sceltaCPU === 0){
        sassoCPU.style.margin = "auto"; 
        cartaCPU.style.display = "none";
        forbiciCPU.style.display = "none";

        risultato.textContent = "HAI PERSO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";

    } else if (sceltaCPU === 1 ) {
        sassoCPU.style.display = "none";
        cartaCPU.style.margin = "auto"; 
        forbiciCPU.style.display = "none";

        risultato.textContent = "HAI VINTO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";
 
    } else if (sceltaCPU === 2) {
        sassoCPU.style.display = "none";
        cartaCPU.style.display = "none";
        forbiciCPU.style.margin = "auto"; 

        risultato.textContent = "PAREGGIO!"
        frase.textContent = "Aggiorna la pagina per giocare ancora.";

    } 


    

})




