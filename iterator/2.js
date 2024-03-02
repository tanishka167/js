// for-of loop--------> does not work with objects

//["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

// maps ------> not iterable

const map=new Map()
map.set('IN','India')
map.set('UK','United Kingdom')
map.set('JP','Japan')

console.log(map)
for(const [key,value] of map){
    console.log(key);
}

// for-in loop ------>can be used in objects
const myobj={
    'game1':"hello",
    'game2':"hey"
}
for(const key in myobj){
    console.log(myobj[key]);
}

const arr1=[1,2,3,4,5]
for (const i in arr) {
    console.log(arr1[i]);
}

// for-each loop--->high order loop
const arr2=[1,2,3,4,5]
// arr2.forEach(function (i) {
//  console.log(i);   
// });
// -------------or------------
// arr2.forEach(i => {
//     console.log(i);
// });

function print(i) {
    console.log(i);
}

arr2.forEach(print)

const code=[{
    name:'js',
    file:'.jsfile',
},{
    name:'py',
    file:'.pyfile',
},{
    name:'java',
    file:'.javafile',
}
]
code.forEach(item => {
    console.log(item.name);
});