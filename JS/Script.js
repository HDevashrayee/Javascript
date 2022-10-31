'use strict';

/* console.log("Hello JS");
let fName= "Hitesh";
console.log(fName); */

//Handling click events.

document.querySelector('.btnscore').addEventListener('click', function(){
    let score = document.querySelector('.score').value;

    document.querySelector('.result').value=score;
});

/* document.querySelector('.score').value=9;
let score = document.querySelector('.score').value;
document.querySelector('.result').value = score; */