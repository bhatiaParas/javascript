const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector("body");

 buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);//e mouse event ha..humne grey color par click kiya ...--->PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
        console.log(e.target);
        if(e.target.id ==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
 })