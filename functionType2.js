const sumResult = function(val1, val2){
    return val1+val2;
}

console.log(sumResult(10,30));

//this

const sumResult2 = (val1, val2) => (val1+val2);  //Implicit return

console.log(sumResult2(40,30));


((v1, v2)=> console.log(v1+v2))(10,20);

















// const sumfunction = new Function('num1','num2', 'return num1 + num2');

// console.log(sumfunction(10,20));

// let c;
// let x;

// (function fun(name){
//    console.log("My name is:"+name);
// })("Anirban");

// fun1();

// function fun1(){
//     console.log("Function Statement");
// }



// var fun2= function fun3(){   //named function expression
//     console.log("Function Expression");
// }
// fun2();

// const fun = () => console.log("having fun");

// fun();



