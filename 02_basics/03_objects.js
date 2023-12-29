// singleton
// Object.create

// object literals
const mysum = Symbol("key1")
const Jsuser={
    name:"Paras bhatia",
    email:"paeasbhatia13630859@gmail.com",
    "full name":"Paras Arvind Bhatia",
    [mysum]:"mykey1"
}
console.log(Jsuser.email)
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(typeof [mysum]);