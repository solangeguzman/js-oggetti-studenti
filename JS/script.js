// ---1---
// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in
// tutte le proprietà dell’oggetto.
var nameStudent={
    name:'Carlos',
    surname:'Ferrari',
    age:'30'
}


for (var x in nameStudent) {
    console.log(nameStudent[x]);
}

// ---2---
// Creare un array di oggetti di studenti. Ciclare
// su tutti gli studenti e stampare per ognuno di
// essi, nome e cognome. Ricordatevi, è un array, 
// quindi? for.

var infoStudent= {
    users:[
        {name:'Camilla',surname:'petrilli', age:'24'},
        {name:'Carlo', surname:'bianchi', age:'25'},
        {name:'marco', surname:'rubino', age:'44'},
    ]
}


for(var x = 0; x < infoStudent.users.length; x++) {
    for (var k in infoStudent.users[x]){
        console.log(infoStudent.users[x][k]);
    }
}

// ---3---
// Dare la possibilità all’utente, attraverso 3 prompt() 
// - uno per ciascuna proprietà - di aggiungere UN SOLO 
// oggetto studente inserendo nell’ordine: nome, cognome e età.
infoStudent.users.push({
  name: prompt('Inserisci il tuo nome'),
  surName:prompt('Inserisci il tuo cognome'),
  age:  prompt('Inserisci la tua età')
    
});console.log(infoStudent)        

