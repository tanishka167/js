// singelton

// object literals

const mySymbol=Symbol("key1")

const obj={};
const obj1={
    name:"Ester",
    "full name" : "Ester Johnson",
    // symbol
    [mySymbol]: "mykey1",

    age:12,location:"Kanpur",
    email:"ester@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(obj1.email);
console.log(obj1["full name"]);
console.log(obj1["email"]);

console.log(typeof obj1.mySymbol);
console.log(obj1[mySymbol]);

obj1.email="change@gmail.com"
// Object.freeze(obj1);
// obj1.email="aginchange@gmail.com"
console.log(obj1);

obj1.greeting=function(){
    console.log("Hello Obj1");
}
obj1.greetingTwo=function(){
    console.log(`Hello obj1, ${this.name}`);
}
console.log(obj1.greeting); //undefined
console.log(obj1.greeting());
console.log(obj1.greetingTwo());
