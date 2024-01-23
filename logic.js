// we have to generate hexcode for color randomly so for that we will generate random index from 0 to 15

const hex = '0123456789ABCDEF';
let color = '#';
function changeColor(){
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 15)]
    }
    document.querySelector('body').style.backgroundColor = color
    color = '#'
}

let start;

document.querySelector('#start').addEventListener('click' , function(e){
    if(!start){
    start = setInterval(changeColor , 1000);
    }
})

document.querySelector('#stop').addEventListener('click' , function(e){
    clearInterval(start);
    start = null
})