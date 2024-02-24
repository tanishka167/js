const arr=[0,1,2,3,4,5]
const myArr=["Aish","Emily"]

const myArr2=new Array(1,2,3,4);
console.log(myArr[0]);
console.log(myArr[2]);

// methods
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(0)
myArr.unshift(9)

console.log(myArr.includes(0));
console.log(myArr.indexOf(8));

myArr.shift()
console.log(myArr);

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice
console.log("A",myArr);
console.log("Original ",myArr);

const myn1=myArr.slice(1,3);
console.log("Slice ",myn1);

const myn2=myArr.splice(1,3);
console.log("Splice ",myn2);
console.log("Array formed ",myArr)