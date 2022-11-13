'use strict';

/* console.log("Hello JS");
let fName= "Hitesh";
console.log(fName); */

//Variable declaration.

let score = 0;

//Handling click events.

document.querySelector('.btnscore').addEventListener('click', function(){
    score = document.querySelector('.score').value;

    document.querySelector('.result').value=score;
    ManupilateStyle();
});

// Manupilate CSS 

function ManupilateStyle(){
if(score>0)
{
document.querySelector('body').style.backgroundColor = '#6B728E';
}
}