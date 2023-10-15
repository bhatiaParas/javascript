//DATES

let mydate = new Date();
console.log(mydate);//---->2023-10-15T17:11:03.229Z    not readable

console.log(mydate.toString());//----->(Sun Oct 15 2023 17:12:25 GMT+0000 (Coordinated Universal Time))  much more readable

console.log(mydate.toDateString())//----->Sun Oct 15 2023

console.log(mydate.toISOString())//--->2023-10-15T17:14:58.481Z

console.log(mydate.toJSON())//---->2023-10-15T17:15:54.651Z

console.log(mydate.toLocaleDateString())//---->10/15/2023

console.log(mydate.toLocaleString())//------->10/15/2023, 5:17:31 PM


console.log(typeof mydate)//---->typeof---object


let mycreateddate = new Date(2023,0,23,5,3);
console.log(mycreateddate.toDateString());//-------->Mon Jan 23 2023

console.log(mycreateddate.toLocaleString())//----->1/23/2023, 5:03:00 AM

// YY MM DD

let stringdate = new Date("2023-01-02");
console.log(stringdate.toDateString())//---->Mon Jan 02 2023
console.log(stringdate.toLocaleString())//---->1/2/2023, 12:00:00 AM

