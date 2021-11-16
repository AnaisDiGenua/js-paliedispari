// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.






// L’utente sceglie pari o dispari
const userPariDispari = prompt('scegli pari o dispari');
// inserisce un numero da 1 a 5
const userRandomNumber = parseInt(prompt('scegli un numero da 1 a 5'));
console.log('il numero scelto dall utente è: ' + userRandomNumber);


//  numero random usando una funzione
function randomNumber (min, max) {
    return Math.floor(Math.random() *(max - min))+ min ;
}

// numero random computer
const pcRandomNumber = randomNumber(1,5);
console.log('il numero del pc è: ' + pcRandomNumber);


// Sommiamo i due numeri
const somma = userRandomNumber + pcRandomNumber;
console.log('la somma è ' + somma);


// stabiliamo se è pari o dispari usando una funzione
function pariDispariFun (number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

// Dichiariamo chi ha vinto
const vincitore = pariDispariFun(somma);





// *********SOLUZIONE CON DUE CONDIZIONI SENZA OR*****************
// if (vincitore && userPariDispari == 'pari') {
//     console.log('hai vinto!');
// } else if (vincitore == false && userPariDispari == 'dispari') {
//     console.log('hai vinto');
// } else {
//     console.log('hai perso!');
// }



// ************SOLUZIONE CON OR******************************
if (vincitore && userPariDispari == 'pari' || vincitore == false && userPariDispari == 'dispari') {
    console.log('hai vinto!');
} else {
    console.log('hai perso!');
}
