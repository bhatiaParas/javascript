console.log("2">1);//--->True
console.log("02">1);//--->True

// (((((((ye string ko pehle number me convert karega then after compare karega)))))))))




console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true
console.log(null<=0);//true


// the reason is that an equality check == and comparisons >,<,>=,<=  work differently
// comparison convert the null into a number ,treating its as a zero(0).
// thats why null>=0 is true and null>0 false
// But in case of == is diffent it simply compares
//avoid

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<0)//false
console.log(undefined<=0)//false
console.log(undefined>=0)//false
//avoid


console.log("2"===2);//IMPORTANT POINT:ye pehle data type ko padega..isme convert nahi karega