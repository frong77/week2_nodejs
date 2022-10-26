var var1 =200; //Golbal scope variable
function test(){
    var var1 = 300;//ES5: Local scope variable
    console.log(var1);
}
//console.log(var1)
//test();

let a = 200;
function test2(){
    let a = 300;
    console.log(a)
}
test2();//300
console.log(a);//200