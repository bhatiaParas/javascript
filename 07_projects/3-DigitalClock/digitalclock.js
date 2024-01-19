const clock = document.querySelector('#clock');

// setInterval-->Ye hmare javascript me Events ko control karta ha ...Ye bataata ha ap muje koi method de dejiye or ek interval bata dejiye..ki kitne interval baad usko continusely  run karta jaunga
 
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);
