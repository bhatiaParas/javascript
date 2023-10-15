const name = "Paras";
const repocount = 50;


// console.log(name + repocount);------>Ye purani tarah se likha jata ha,hum new method sikhenge

//This method is used in frontend and backend

console.log(`hello, my name is ${name} and my repocount is ${repocount}`);//More prefferable
//String interpulation


const gamename= new String("Paras-Bhatia");
console.log(gamename);//--->[String: 'Paras-Bhatia']
console.log(gamename[0]);  //----------->P
console.log(gamename.__proto__);//------->{}
console.log(gamename.length);//---------->5
console.log(gamename.toUpperCase());//----->PARAS
console.log(gamename.charAt(2)); //-------->r....iska matlb ha 2nd index pe konsa character ha
console.log(gamename.indexOf("a"));//----->1....iska matlab ha char "a" kis index no. pe ha
console.log(gamename.split('-'));//--->[ 'Paras', 'Bhatia' ]..string ko array me convert kardega..- ko , me change kar dega

const newstring = gamename.substring(0,2);//---->Pa--->iska mtlb ha 0 se lekar 1 tuk index character ko print karega
console.log(newstring);

const anotherstring = gamename.slice(1,2);//--->a--->same ab substring..difference is hum isme negative value le sakye ha jaise(-5,2) but substring me nahi le sakte
console.log(anotherstring);

const newstringone = "   Paras    ";
console.log(newstringone);//-->   Paras   
console.log(newstringone.trim());//--->Paras...extra spaces ko delete kar dega


const url="https://paras.com/paras%20bhatia";
console.log(url.replace('%20','-'));//--->https://paras.com/paras-bhatia...isme ye '%20' ko '-' replace kar dega


console.log(url.includes('sundar'));//--->false...check karega sundar ha url me ya nahi



//Google pe jake bi kar sakte ha 
//inspect pe jao
//console pe jao
//const gamename= new String("Paras-Bhatia");    example ke tor pe ye likhdo
//and write gamename in console and enter
//string likha aa raha hoga uspe click karo and prototype pe bi click karo
//all functions aa jayenge


//another method--->search ...stringmdn.... in google