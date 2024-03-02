(function fun() {
    // named iife
    console.log("Connection 1");
})(); //; is used to end the context 

( (name)=> {
    console.log(`Coonected 2 ${name}`);
})("Ester");

console.log("Hey");
console.log("Hello")