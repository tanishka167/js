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
    console.log(this.user)
    console.log(this);
}
hey()

// arrow function
const hello=() => {
    let user="Ester"
    console.log(this.user) //undefined
    console.log(this)
}
hello()