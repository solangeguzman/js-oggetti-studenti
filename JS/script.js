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
console.log(nameStudent);
var resultOggett = document.getElementById('output');

for (var x in nameStudent) {
    resultOggett.innerHTML += x + " " + nameStudent[x] + " " + "<br/>";
}
