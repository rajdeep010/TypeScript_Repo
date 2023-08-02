
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