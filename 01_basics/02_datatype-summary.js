/*  DATA TYPES is basically defined into two categories i.e--->
                  1.Primitive
                  2.Non-primitive/Reference

                  

1.PRIMITIVE---> It is consists of seven types-->
                           a.Number
                           b.Null
                           c.Boolean
                           d.BigInt
                           e.Symbol
                           f.String 
                           g.Undefined


    ------------------>>>>>>>>>  nn bb ss u  <<<<<<<<<<<<<<<<<<<<<<<-------------------  


2.NON-PRIMITIVE/REFERENCE--->Arrays,Objects and Functions.*/


const score=100;                 //typeof--->Number
const scorevalue=100.3;                 //typeof--->Number
// console.log(typeof(scorevalue))
const isLoggedIn=false;                 //typeof---->Boolean
const outtemp=null;                 //typeof--->Empty,null
let userEmail;                       //typeof--->undefined
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

//IMPORTANT
//SYMBOL agar likh dete ha to different behave karega variables ke liye,




/*                       NON-PRIMITIVE------>Arrays,Objects,Functions
*/
//EXAMPLES----->
const heroes=["shaktiman","naagraj","doga"];
let myobj={
    name:"Paras",
    age:19,
}
const myfunction=function(){
    console.log("Hello world");
}
console.log(typeof heroes);                    //typeof----------->object
console.log(typeof myobj);                    //typeof----------->object
console.log(typeof myfunction);                    //typeof--------->function

//stack(PRIMITIVE),heap(NON-PRIMITIVE)

 //example of stack:
 let myyoutubechannel="ParasBhatia";
 let anothername=myyoutubechannel;
 anothername="bhatiasaab";
 console.log(myyoutubechannel);
 console.log(anothername);


//  example of heap:
let userone={
    email:"Thunder@gmail.com",
    upi:"upi@sbl",
}
let usertwo=userone;
usertwo.email="ParasBhatia@gmail.com";
console.log(userone.email);
console.log(usertwo.email);

//stack me hamesha copy jati ha
//heap me hmesha reference jata ha
