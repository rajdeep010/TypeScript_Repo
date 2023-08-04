// Compile the ts file using : tsc file_name.ts
// it will generate the coreesponding js file, then run : node file_name.js
// it will say duplicate function implementation 
// but to remove it we use ts-ignore
// @ts-ignore
function fun(a, b) {
    return a + b;
}
console.log(fun(5, 34));
// whether there is any error or not, tsc will make the compiled js file
// TS-configuration file will not let it to make the js file until remove all error
// tsc --init
// search for "emitonerror" , mark it true and uncomment
function sum(a, b) {
    return a + b;
}
// console.log(sum(5,"Rajdeep"))   // this will not let us make the js file
var greet = function (name, age) {
    return "Welcome ".concat(name, " in the group of age ").concat(age);
};
var msg = greet('Rajdeep', 23);
console.log(msg);
var ispal = function (str) {
    var temp = str.split('').reverse().join('');
    return temp === str;
};
console.log(ispal('12321'));
// ! Default parameter passing
var greet2 = function (name, age) {
    if (age === void 0) { age = 15; }
    return "Welcome ".concat(name, " of age ").concat(age);
};
var result = greet2('Rajdeep');
console.log(result);
var res = greet2('Hello', 43);
console.log(res);
// ! Optional parameter passing
var greet3 = function (name, age) {
    if (age) {
        return "Welcome ".concat(name, " of age ").concat(age);
    }
    else {
        return "Welcome ".concat(name, " without age");
    }
};
var resi = greet3('Rajdeep');
console.log(resi);
var arr = ['Rajdeep', 'Arindam', 'Arup', 'Soumabha', 'Souvik'];
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
var newArr = arr.map(function (val) { return val + "-- hello --"; });
console.log(newArr);
// ! array FILTER METHOD
var array = [1, 2, 4, 5, 7, 8];
var evens = array.filter(function (elm) { return elm % 2 === 0; });
console.log(evens);
