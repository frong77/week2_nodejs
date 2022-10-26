var a = 200;

{
    //var a = 300;//ES5: Local sope variable
    console.log(a)
}
//console.log(a)

let b =400;//ES6: Local scope variable with fucntion scope
{
    let b = 500;//ES6: Local scope variable
    console.log(b);
}

console.log(b);