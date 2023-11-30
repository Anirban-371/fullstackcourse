let obj = {
    "name": "Anirban",
    "subjects": ["Science","Maths","CS"],
    //"play" : function(){
    play(...subject){
        this.subjects.push(...subject);
        this.subjects.map(function(e){
            console.log(e);
        })       
    }
}
let obj1 = {
    "name": "Anirban",
    "subjects": ["Science","Maths","CS"],
    //"play" : function(){
    play(sub1, sub2){
        console.log("Two parameters")
        this.subjects.push(sub1);
        this.subjects.push(sub2);
        this.subjects.map(function(e){
            console.log(e);
        })       
    },
    play(sub1, sub2, sub3){
        console.log("Three parameters")
        this.subjects.push(sub1);
        this.subjects.push(sub2);
        this.subjects.push(sub3);
        this.subjects.map(function(e){
            console.log(e);
        })       
    }
}

console.log(obj.name);
obj.play("history","geography");

console.log("----------------------------------------");
obj1.play("history1","geography1", 7);
console.log("----------------------------------------");
obj1.play("history2",2,true);
console.log("----------------------------------------");



/*let sum = function(a,b){
    return a+b;
}

console.log(typeof sum);
//Assigning a function as a value to a variable
console.log(sum(10,20));
*/










// Regular function

// function sum(a,b){
//     return a+b;
// }

//console.log(sum(40,20));
//console.log([50,30].reduce(sum));

    //Recursive function (Regular function)
    //Implement the function in a way that the function calls itself to solve a problem 

// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(4));















// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// // console.log(a);
// // console.log(b);
// console.log(c);


// let d= 10;


// function fun(name="Guest"){
//     return `hi,${balance} sdkjfdhsdkjfhsdkjfhsjk   ${price}`;
// }

// let result = fun("anirban");
// console.log(result);
