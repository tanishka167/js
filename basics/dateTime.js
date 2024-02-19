// Dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23)
let myCreatedDate2=new Date(2023,0,23,5,3)
let myCreatedDate3=new Date("2023-01-14")
let myCreatedDate4=new Date("01-14-2023")
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());


// Timestamps
let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(myCreatedDate4.getTime()); //gives in milliseconds
console.log(Date.now()/1000); //in seconds (wrong method) XXXXXXXXX
console.log(Math.floor(Date.now()/1000)); //in seconds (right method) 

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:''
})