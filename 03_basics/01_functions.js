function saymyname(){
console.log("P")
console.log("A")
console.log("R")
console.log("A")
console.log("S")
}
// saymyname-----> YE REFERENCE HA
// saymyname()//--------------->Ye execution hota ha

function calculatecartprice(var1,var2,var3,...num1){
    return num1;
}
// console.log(calculatecartprice(200,400,600,800,9000));//------------>[ 800, 9000 ]




const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//  handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const mynewarray=[200,400,600,800];

function retuarray(arrayobject){
    return arrayobject[2];
}
// console.log(retuarray(mynewarray)); ------------>600