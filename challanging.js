// Array of Pokémon
const pokemons = [
    { name: 'Pikachu', tier: 'A' },
    { name: 'Charizard', tier: 'S' },
    { name: 'Bulbasaur', tier: 'B' },
    { name: 'Squirtle', tier: 'B' },
    { name: 'Jigglypuff', tier: 'C' }
];

// Function to call Pokémon by their first name
function pakName() {
    for(let i =0;i<pokemons.length;i++) {
        console.log(pokemons[i].tier);
    }
}
pakName();

// function reverse
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('miso'));


console.log(reverseString('vim'));

let miso ='kim';
console.log(miso.split('').reverse().join(''));

// by using loops

function rks(rtr){
    let km = ''; // empty string 
    for(let i=rtr.length-1;i>=0;i--) {
        km+=rtr[i]; //store the value of rtr[i] in km empty variable
    }
    return km;
}
console.log(rks('miso'));