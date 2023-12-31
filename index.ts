
// Compile the ts file using : tsc file_name.ts
// it will generate the coreesponding js file, then run : node file_name.js

// it will say duplicate function implementation 
// but to remove it we use ts-ignore

// @ts-ignore
function fun(a:number,b:number):number{
    return a + b
}

console.log(fun(5,34))


// whether there is any error or not, tsc will make the compiled js file
// TS-configuration file will not let it to make the js file until remove all error
// tsc --init
// search for "emitonerror" , mark it true and uncomment

function sum(a:number,b:number):number{
    return a + b
}

// console.log(sum(5,"Rajdeep"))   // this will not let us make the js file

const greet = (name:string, age:number):string => {
    return `Welcome ${name} in the group of age ${age}`
}

let msg = greet('Rajdeep', 23)
console.log(msg)

const ispal = (str:string):boolean => {
    let temp = str.split('').reverse().join('')
    return temp === str
}

console.log(ispal('12321'))

// ! Default parameter passing
const greet2 = (name: string, age: number = 15) => {
    return `Welcome ${name} of age ${age}`
}

const result = greet2('Rajdeep')
console.log(result)

const res = greet2('Hello', 43)
console.log(res)

// ! Optional parameter passing
const greet3 = (name: string, age?: number) => {
    if(age){
        return `Welcome ${name} of age ${age}`
    }else{
        return `Welcome ${name} without age`
    }
}

const resi = greet3('Rajdeep')
console.log(resi)


const arr = ['Rajdeep', 'Arindam', 'Arup', 'Soumabha', 'Souvik']

// ! for traversing over the indices for-in loop
// for (const i in arr){
//     console.log(arr[i])
// }

// ! for traversing over the values for-of loop
// for(const ele of arr){
//     console.log(ele)
// }

// ! for each loop
// arr.forEach((ele) => console.log(ele))



// ! array MAP METHOD
// map method creates a new array by applying a provided fn. to each element of array
const newArr = arr.map((val) => val + "-- hello --")
console.log(newArr)


// ! array FILTER METHOD
const array = [1,2,4,5,7,8]
const evens = array.filter((elm) => elm % 2 === 0)
console.log(evens)


// ! Objects in ts
const obj:{
    name: string;   // ? Semicolon
    age: number;
    college: string;
    address:{city: string; area: string}
} = {
    name: 'Rajdeep',
    age: 23,
    college: 'Jadavpur University',
    address: {
        city: 'Kolkata',
        area: 'Salt Lake sector IV'
    }
}

console.log(obj)

// ! Although there is type inference we write the types of each field

// ! Type alias
type Person = {
    name: string;   // ! Semicolon
    age: number;
    college: string;
    class?:string;  // this ? makes it optional
    address:{city: string; area: string}
}

const person3:Person = {
    name: 'Rajdeep',
    age: 23,
    college: 'Jadavpur University',
    address: {
        city: 'Kolkata',
        area: 'Salt Lake sector IV'
    }
}

type Product = {
    name: string;
    price: number;
    quantity: number
}

const product = {
    name: 'Laptop',
    price: 1000,
    quantity: 5
}

const calculatePrice = (product:Product) => {
    return `${product.name} total cost : ${product.price*product.quantity};` 
}

console.log(calculatePrice(product)) 


// !  ----**** Call Signature ****----
// inside a class if we declare a function that is a method,
// and if we define its type and paramters etc, then that is called 'Call Signature'

type Student = {
    name: string;
    age: number;
    gender?:string;
    greet: (country:string) => string   // ! method call signature
}

const student1:Student = {
    name: "Rajdeep",
    age: 23,
    greet: (country) => `Hello My name is ${student1.name} and I'm ${student1.age} years old & I am from ${country}`
}

const intro = (student1:Student) => {
    const {name, age} = student1;
    return `Hello My name is ${name} and I'm ${age} years old`;
}

console.log(intro(student1));
console.log(student1.greet('India'))
