//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF ";
    let color = "#";
    for(let i=0 ; i<6 ; i++){
        color = color + hex[(parseInt(Math.random() * 16))];
    }
    return color;
}

console.log(randomColor())
let start = 0;
document.querySelector("#start").addEventListener('click',function(){
  if(!start){ //.....IMPORTANT CONCEPT..... 
  start = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1200);}

 
})

document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(start);
    start = null;
})