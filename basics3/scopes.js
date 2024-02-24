// var c=300
let a=300
if(true){
    let a=10
    const b=20
    var c=30
    console.log("a : ",a)
}
// console.log(a);
// console.log(b);
console.log(a);

function one(){
    const user="Ester"

    function two() {
        const website="youtube"
        console.log(user);
    }
    // console.log(website);
    two()
}
one()