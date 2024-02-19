const name="Tanishka"
const repo=5
console.log(name+repo+"Value")

console.log(`Hello my name is ${name} and my repo count is ${repo}`)

const surname=new String('Sharma')
console.log(surname)
console.log(surname[0])
console.log(surname.__proto__)

console.log(surname.length)
console.log(surname.toUpperCase())
console.log(surname.charAt(3))
console.log(surname.indexOf('m'));

const newString=surname.substring(0,2);
console.log(newString)

const another=surname.slice(-8,4);
console.log(another)

const anew="      Tanishka           "
console.log(anew)
console.log(anew.trim())

console.log(anew.includes("T"))
console.log(anew.includes("some"))

console.log(surname.split("-"))