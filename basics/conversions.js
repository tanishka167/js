let score="33"
console.log("String: ")
console.log(typeof score)   //not a method
console.log(typeof (score))  //method

let valueInNumber=Number(score);
console.log(typeof (valueInNumber))  //method
console.log(typeof(Number(score)))

let score1="33abc"
console.log("Alphanumeric: ")
console.log(typeof (score1))
console.log(Number(score1))
let valueInNumber1=Number(score1);
console.log(typeof (valueInNumber1))
console.log(valueInNumber1)
console.log(typeof NaN)

let score2=null
console.log("Null:")
console.log(typeof (score2)) 
let valueInNumber2=Number(score2);
console.log(typeof (valueInNumber2))
console.log(valueInNumber2)

let score3=undefined
console.log("Undefined: ")
console.log(typeof (score3)) 
let valueInNumber3=Number(score3);
console.log(typeof (valueInNumber3))
console.log(valueInNumber3)


// "33" => 33
// "33abc" => NaN
//  true => 1, false => 0

let isloggesIn=1
let booleanIsLoggedIn=Boolean(isloggesIn)
console.log(booleanIsLoggedIn)

let sum=33
let stringconvert=String(sum);
console.log(stringconvert)
console.log(typeof (stringconvert))

// -----------------Operations------------------
let val=3
let myval=-val
console.log(myval)

let str1="Hello "
let str2="World"
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log("1"+2+2)
console.log(1+"2")
console.log(1+2+"2")

console.log(true)
console.log(+true)
// console.log(++true)
// console.log(+true+)
// console.log(true+)
console.log(+"")

console.log("Counter1:")
let counter1=0
let post=counter1++

let counter2=1
console.log("Counter2:")
let pre=++counter2
console.log(post)
console.log(pre)