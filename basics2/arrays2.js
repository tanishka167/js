const hobby=["Singing","Dancing","Sports"]
const prof=["Study","Business","Cook"]

// hobby.push(prof); //nested arrays
// console.log(hobby); 
// console.log(hobby[3][1]); 


// const newhobby=hobby.concat(prof)
// console.log(newhobby); 

console.log("Spread");
const allhobby=[...hobby,...prof];
console.log(allhobby);
// console.log([...hobby,...prof]);

console.log("Flat ");
const arr=[1,2,[3,4,[5,31,[4,2]]]]
const newarr=arr.flat(Infinity)
console.log(newarr);

console.log(Array.isArray("Emster"));
console.log(Array.isArray(["Emster"]));
console.log(Array.isArray(hobby));
console.log(Array.from("Emster")); //[ 'E', 'm', 's', 't', 'e', 'r' ]
console.log(Array.from(["Emster"])); //[ 'Emster' ]
console.log(Array.from({name:"Ester",age:17})); //[]-> empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
console.log(Array.of(400,500,600));