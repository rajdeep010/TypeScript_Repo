
// it will say duplicate function implementation 
// but to remove it we use ts-ignore

// @ts-ignore
function fun(a:number,b:number):number{
    return a + b
}

console.log(fun(5,34))