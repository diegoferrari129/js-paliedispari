
function palindroma(word) {

    let inverseWord = '';

    for (let i = word.length -1 ; i >= 0; i--){

        inverseWord += word[i];

    }

    if (inverseWord === word){
        console.log('La parola digitata è palindroma');
    }

    else {
        console.log('La parola digitata NON è palindroma')
    }
}

const userInput = prompt('Inserisci una parola');

palindroma(userInput.toLowerCase());