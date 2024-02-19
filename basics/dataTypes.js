"use strict"; //treat all JS code as never version

//alert(3+3) --we are using nodeJs not browser hence, gives error

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null =>standalone value
// undefined => not defined but declared
// symbols => unique
// object

console.log(typeof null)
console.log(typeof undefined)

// Memory allocation

// Stack(primitive)
let myPrim="Primitive datatype"

// Heap(non-primitive)
let myNonPrim = myPrim
myNonPrim="Heyaa Changed..."

console.log(myPrim);
console.log(myNonPrim);
console.log(myNonPrim);

let user={
    email: "someone@google.com" ,upi: "Myupi1"
}

let user1=user;
console.log(user)
console.log(user1)

user1.email="anyoneChanged@email.com"
console.log(user)
console.log(user1)
