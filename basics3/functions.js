function func(){
    console.log("Hello Function func")
}
func()

function add(num1,num2){//Parameters
    console.log(num1+num2)
}
add() //NaN
add(3,4)// arguments
add(3,"a")
// add(3,a)
add(3,null)

const res=add(3,5)
console.log(res); //undefined

function addition(num1,num2){
    return num1+num2
}
const ans=addition(3,5)
console.log(ans); 

// rest operator
function addCartPrice(...num1){
    return num1
}
console.log(addCartPrice(200,300,400))


function addToCartPrice(val1,val2,...num1){
    return num1
}
console.log(addToCartPrice(200,300,400))

const user={
    id:"1",
    name:"Ester",
    email:"someone@gmail.com"
}

function handleObject(myobj) {
    console.log(`Username is ${myobj.name} and email is ${myobj.email}`);
}
handleObject(user)

function handleArray(myArr) {
    console.log(myArr[0]);
}
const newArr=[200,300,400,500]
handleArray(newArr)