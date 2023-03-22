/*
    Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// prendo il bottone
const btn = document.querySelector('button');
// genero i 5 numeri randomici
const numberPc = [];
while(numberPc.length < 5){
    const numberRandom = getRndInteger(1, 1000);
    numberPc.push(numberRandom);
}
console.log(numberPc);

//Stampo i numeri
printNumers();



function printNumers(){
    const boxNumberPc = document.querySelector('.number');
    for (const numbers of numberPc) {
        boxNumberPc.innerHTML += `<span class="pe-4 fs-1">${numbers}</span>`;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}