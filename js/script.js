 
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
   risultato.append('Complimenti giocatore, hai vinto!')
   console.log('Hai vinto!')

 } else {
   numberGamers.append(numberRandomUsers)
   computerNumber.append(numberRandomComputer)
   risultato.append('Looser, ha vinto il computer mi dispiace!')
   console.log('Ha vinto il computer!')
 }

 // Section console log 

 console.log(numberRandomUsers)
 console.log(numberRandomComputer)


 //Mail Section

 // Lista mail and Button const

 const mailList = ["pierino@gmail.com", "idraulico@libero.it", "luchino@gmail.com", "uomosenzacapelli@hotmail.com", "cicciolino@gmail.com", "trenitaliainritardo@libero.it", "rickeilsuobaffo@roma.com"]

 const mailButton = document.getElementById('confirmEmail"')




