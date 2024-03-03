const code=['js','python','java','solidity']

const val=code.forEach((item)=>{
    console.log(item);
})
console.log(val);//undefined-->forEach loop doesnot return anything
const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNum.filter((nums) => nums > 4)
console.log(newNums);
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

const nums=[]
// mynums.forEach((nums)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })

