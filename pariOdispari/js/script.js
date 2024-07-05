function randomNumber(){
    return Math.floor(Math.random() * 5 + 1);
}

function evenOrOdd(sum){
    if (sum % 2 === 0) {
        return 'pari'
    }

    else {
        return 'dispari'
    }

}

let userChoice = prompt('Digita pari oppure dispari');

let userNumber = parseInt(prompt('Inserisci un numero compreso da 1 a 5'));

let pcNumber = randomNumber();
console.log(pcNumber);

let sum = userNumber + pcNumber;
console.log(sum);

let result = evenOrOdd(sum);


if (userChoice === result) {
    console.log('Hai vinto!')
}

else {
    console.log('Hai perso!');
}