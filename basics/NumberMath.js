const score =400
const balance=new Number(100)
// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const othernum=100
// console.log(typeof othernum);
// console.log(othernum.toPrecision())
// console.log(othernum.toPrecision(0)) ---------error
// console.log(othernum.toPrecision(1))
// console.log(othernum.toPrecision(2))
// console.log(othernum.toPrecision(3))

const num=0.000123
// console.log(num.toPrecision())
// console.log(num.toPrecision(0)) --------error
// console.log(othernum.toPrecision(1))
// console.log(othernum.toPrecision(2))
// console.log(othernum.toPrecision(3))
// console.log(othernum.toPrecision(4))
// console.log(othernum.toPrecision(5))

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ----------------------Maths---------------------
console.log(Math)
console.log(Math.abs(-2));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,2,3));
console.log(Math.max(4,9,2,3));

console.log("Random :");
console.log(Math.random(4.9,2,3));
console.log((Math.random(4.9,2,3)*10)+1);
console.log(Math.floor(Math.random(4.9,2,3)*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min)