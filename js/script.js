 
 //Gioco dei dadi
 //Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 //Stabilire il vincitore, in base a chi fa il punteggio più alto.

 //Mail
 //Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 //Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?


 //Per il gioco dei dadi dobbiamo quindi generare un numero random da 1 a 6, sia per il nostro giocatore che per il computer in sè

 //Section numeri randomici 

 let numberRandomUsers = Math.floor(Math.random() * 6)
 let numberRandomComputer = Math.floor(Math.random() * 6)

 const numberGamers = document.getElementById('numberGamers')
 const computerNumber = document.getElementById('computerNumber')
 const risultato = document.getElementById('risultato')

 // Per stabilire il vincitore del gioco si deve ottenere il numero piu' alto 

 // If and Else section 

 if (numberRandomUsers > numberRandomComputer) {
   numberGamers.append(numberRandomUsers)
   computerNumber.append(numberRandomComputer)
   computerNumber.append(numberRandomComputer)
   risultato.append('Complimenti giocatore, hai vinto!')
   console.log('Hai vinto!')

 }


