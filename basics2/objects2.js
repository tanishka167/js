const user=new Object();
console.log(user);

user.id="123abc"
user.name="Ester"
console.log(user);

// objects inside objects
console.log("objects inside objects ");
const regularUser={
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname: "SomeOne",
            lastname: "Lastname"
        }
    }
}
console.log(regularUser);
console.log("Full name:",regularUser.fullname);
console.log("User's first name:",regularUser.fullname.userfullname.firstname);

// comine objects
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

const obj3={obj1,obj2}
console.log(obj3);
// {
//   obj1: { '1': 'a', '2': 'b', '3': 'c' },
//   obj2: { '4': 'a', '5': 'b', '6': 'c' }
// }
const obj4=Object.assign(obj1,obj2)
console.log(obj4);

const obj5=Object.assign({},obj1,obj2)
console.log(obj5);

const obj6={...obj1,...obj2}
console.log(obj6);

// if values are coming from database-> arrays of objects
const user1=[{
    id:"1",
    email: "someone@gmail.com"
    },{
        id:"2",
        email: "another@gmail.com"
    },{
        id:"3",
        email: "someother@gmail.com"
    }
]

console.log(user1[1].email)
console.log(Object.keys(user)); //[ 'id', 'name' ]
console.log(Object.values(user)); //[ '123abc', 'Ester' ]
console.log(Object.entries(user)); //[ [ 'id', '123abc' ], [ 'name', 'Ester' ] ] --> [[keys,...],[values,...]]
console.log(user.hasOwnProperty('id'));
console.log(user.hasOwnProperty('surname'));