const score = 400;
console.log(score);//---->400

const balance = new Number(100);
console.log(balance);//---->[Number: 100]

console.log(balance.toString())//---->100....Number ko string me change kar dega
console.log(balance.toString().length);//---->3....string ki length
console.log(balance.toFixed(4));//---->100.0000....point 4 digit tuk aa jayega..MOST USED...


const othernumber = 23.896;
console.log(othernumber.toPrecision(3));//--->23.9    is function ka matlab ha point se pehle wala to karega hi point ke badd round off kardega
//MOST USED
//INTERESTING HA 

const hulk = 123.896;
console.log(hulk .toPrecision(3));//--->124   point se pehle 123 to ana tha phir isne point ke bad read karke round off kar diya thats why 124 aya

const port = 1123.896;
console.log(port .toPrecision(3))//--->1.12e+3  pehle isne 3 digit to print kar diye or sara bad me exponential me de diya


const hundreds = 1000000;
console.log(hundreds.toLocaleString());//--->1,000,000  ye function commas me convert karke dega.usually by default american digit system se karke dega.agar indian me chaiye to age dekhe
console.log(hundreds.toLocaleString('en-IN'))//--->10,00,000  agye indian digit system me






/*______________________________MATHS_______________________________________*/





console.log("------------------->MATHS START HO GAYA HA<--------------------")



console.log(Math);//-->Object [Math] {}  by default javascript me hota ha

//google pe jake bi same likhe bhut jayda funstions aa jayenge

console.log(Math.abs(-4))//--->4
console.log(Math.abs(4))//--->4

console.log(Math.round(4.6))//--->5

console.log(Math.ceil(4.2))//---->5

console.log(Math.floor(4.9))//--->4

console.log(Math.min(4,3,6,8))//---->3
console.log(Math.max(4,3,6,8))//---->8

console.log(Math.random())//--->hamesha random value ayege 0 aur 1 ke bich me

console.log((Math.random()*10)+1)//--->multiply 10 isliye kiya kuki hmare value ek point age se aye jaise 1.4,2.6,9.4  and +1 isliye kiya kuki ek case aisa bi ho sakta ha ex. 0.04 or kuch
console.log((Math.floor(Math.random()*10)+1))//--->default hoga jaise 9 uppar sikha ha 


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min)//--->LEARN KARO ..random value ayege 10 or 15 ke bich me






