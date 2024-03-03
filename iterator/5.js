// reduce

const nums=[1,2,3]
// const myNums=nums.reduce(function (acc,currval){   //using function
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )
//---------or--------
const myNums=nums.reduce((acc,currval)=>acc+currval,0); //using arrow function
console.log(myNums);

const shoppingCart=[
    {
        item:"js course",
        price:2999
    },
    {
        item:"java course",
        price:5999
    },
    {
        item:"python course",
        price:2999
    },
    {
        item:"cpp course",
        price:5999
    }
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(total);