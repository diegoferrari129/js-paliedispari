
function palindroma(word) {

    let inverseWord = '';

    for (let i = word.length -1 ; i >= 0; i--){

        inverseWord += word[i];

    }

    
}

const userInput = prompt('Inserisci una parola');

palindroma(userInput.toLowerCase());