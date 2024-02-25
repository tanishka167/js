const user={
    name:"Ester",
    price:1000,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website`)
        console.log("Function:",this);
    }

}
user.welcomeMessage()
user.name="John"
user.welcomeMessage()

console.log("Outside: ",this) //{}

function hey() {
    let user="Ester"
    console.log(this.user) //undefined
    console.log(this);     //undefined
}
hey()

// arrow function
const hello=() => {
    let user="Ester"
    console.log(this.user) //undefined
    console.log(this)  //{}
}
hello()
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))
        // OR
const add=(num1,num2)=> num1+num2
console.log(add(3,4))

        // OR
const addition=(num1,num2)=> (num1+num2)
console.log(addition(3,4))

// return objects
const naming=()=>({name:"Johnny"})
console.log(naming(3,4));