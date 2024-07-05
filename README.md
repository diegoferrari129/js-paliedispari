@qui Ciao ragazzi, Esercizio di oggi:
nome repo: js-paliedispari

Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Numero di push: 10 circa minimo

Errori da evitare
1 - Non effettuare la chiamata di funzione;
2 - Effettuare la chiamata di funzione in un console.log o in un alert ed assegnarlo ad una variabile
3 - Se la funzione ha il return non assegnare la chiamata di funzione ad una variabile

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: (modificato)

//////////////////////////////////////////////////////////////////////////////
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

1- dichiaro una variabile che aquista un valore inserito dall'utente tramite una prompt
2- definisco una funzione per stabilire se il valore insierito è una parola palindroma
2.1- dichiaro una variabile vuota per contenere il valore invertito del valore inserito dall'utente
2.2- inzio un ciclo for per verificare carattere per carattere il valore inserito dall'utente
2.2.1- aggiungo alla variabile vuota il valore risultante dal ciclo for
2.3- ?se il valore inserito dall'utente è uguale al risultato del ciclo for
2.3.1- richiamo la funzione a true
2.4- :altrimenti
2.4.1- richiamo la funzione a false

//////////////////////////////////////////////////////////////////////////////
Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

1 - selelezionare pari o dispari --> dichiaro una variabile con con valore aquisito da una prompt
2 - inserire un numero --> dichiaro un'altra variabile con un valore aqusiito da un'altra prompt
3 - generare un numero random --> definisco una funzione con 'math.random'
4 - sommare i due numeri --> utilizzo l'operatore di somma
5 - stabilire se la somma è pari o dispari --> definisco una funzione con l'operatore di resto
6 - dichiarare il vincitore --> dichiaro una condizione

