// truthy-falsy
const var1="hey"
if(var1){
    console.log("Hey");
}
else{
    console.log("What?");
}
// falsy values---->

// false,0,-0, Bigint 0n,"",null,undefined,NaN

// truthy values--->

// "0",'false'," ",[],{},function(){}
// const userEmail=[]
//empty array
// if(userEmail.length===0){
//     console.log("Array is Empty");
// }

// empty object
// const emptyObj={}
// if(Object.keys().length===0){
//     console.log("Empty object");
// }
// Nulish Coalescing operator(??): null undefined

let val1;
// val1=5??10;
val1=null??10;
console.log(val1)