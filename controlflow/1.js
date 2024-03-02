// if

if(true){
    console.log("True Condition");
}
if(2=="2"){
    console.log("Yes");
}
else{
    console.log("No");
}
let letVar=10;
var varVar=11;
const constVar=12;
if(true){
    console.log(`Let variable ${letVar}`);
    letVar=0;
    letVar++;
    console.log(`Let variable ${letVar}`);
}
// if(true){
//     console.log(`Var variable ${varVar}`);
//     varVar=0;
//     varVar++;
//     console.log(`Var variable ${varVar}`);
// }
// if(true){
//     console.log(`Const variable ${constVar}`);
//     // constVar=0;
//     // constVar++;
//     console.log(`Const variable ${constVar}`);
// }
// console.log(`Let variable ${letVar}`);
// console.log(`Var variable ${varVar}`);
// console.log(`Const variable ${constVar}`);

const balance=1000;
if (balance>100) {
    console.log("Test");
}