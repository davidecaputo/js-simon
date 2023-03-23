/*
    Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// prendo gli elementi che mi servono
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

//faccio apparire il titolo dopo 1 secondo
setTimeout(function(){
    h1.classList.remove('opacity-0');
}, 1000);

// genero i 5 numeri randomici
const numberPc = [];
while(numberPc.length < 5){
    const numberRandom = getRndInteger(1, 1000);
    numberPc.push(numberRandom);
}
console.log(numberPc);

//Stampo i numeri
const boxNumberPc = document.querySelector('.number');
printNumers();

//faccio apparire i numeri dopo 2 secondi
setTimeout(function(){
    boxNumberPc.classList.remove('opacity-0');
}, 2000);


//faccio scomparire i numeri dopo 10 secondi
setTimeout(function(){
    boxNumberPc.classList.add('opacity-0');
}, 12000);

//faccio apparire il primo h2
const firstH = document.querySelector('h2');
setTimeout(function(){
    firstH.classList.remove('opacity-0');
}, 13000);

//faccio apparire il secondo h2
const secondH = document.querySelector('.second-phrase');
setTimeout(function(){
    secondH.classList.remove('opacity-0');
}, 14000);

//faccio apparire il terzo h2
const thirdH = document.querySelector('.third-phrase');
setTimeout(function(){
    thirdH.classList.remove('opacity-0');
}, 15000);

//faccio apparire il from
const form = document.querySelector('form');
setTimeout(function(){
    form.classList.remove('opacity-0');
}, 16000);

//aggiungo il click al bottone
form.addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.querySelectorAll('input');
    let inputValue = [];
    for(let i = 0; i < input.length; i++){
        inputValue.push(parseInt(input[i].value));
    }
    console.log(inputValue);
    controllNumbers(numberPc, inputValue);
});


function printNumers(){
    for (const numbers of numberPc) {
        boxNumberPc.innerHTML += `<span class="pe-4 fs-1">${numbers}</span>`;
    }
}

function controllNumbers(numberPc, inputValue){

    let guessed = 0;
    for(let i = 0; i < numberPc.length; i++){
        for(let j = 0; j < inputValue.length; j++){
            if(numberPc[i] === inputValue[j]){
                guessed++;
            }
        }
    }
    if(guessed === 0){
        result.innerHTML = `<span class="fs-1">Mi dispiace non hai indovinato nessun numero</span>`
    } else if(guessed === 5) {
        result.innerHTML = `<span class="fs-1">Bravissimo hai indovinato tutti i numeri. Hai una memoria di ferro</span>`
    } else {
        result.innerHTML = `<span class="fs-1">Bravo hai indovinato ${guessed} numero/i</span>`
    }
    console.log(guessed);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}