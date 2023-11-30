class AgeValidationFailedError extends Error{

    constructor(message){
        super(message);
        this.name = "AgeValidationFailedError";
    }
}

function fun(){
    let age =12;
    if(age<18){
        throw new AgeValidationFailedError("Kids not allowed");
    }

}

fun();


// function trigger(){
//     try{
//         run();
//         fun();
//     }catch{
//         console.log("failed");
//         //100 lines of code
//     }
// }

// trigger();


// function fun(){
//     try{
//         let i = 15;
//         if(i>10 && i<20){
//             throw new Error("Entered value is wrong");
//         }
//         i = i+10*100;
//         console.log(i);
//     }catch(error){
//         throw new Error("Take the error that I received and do something about it. I dont care.");     //rethrow exception
//     }
// }

// function run(){
//     try{
//         let i = 15;
//         if(i<0 && i>100){
//             throw new Error("Entered value is wrong");
//         }
//         i = i+10*100;
//         console.log(i);
//     }catch(error){
//         throw new Error("Take the error that I received and do something about it. I dont care.");     //rethrow exception
//     }
// }





// try{

//     //xxxxxx
//     try{
//         //a= xxxxxx
//     }catch{
//         a=10;
//     }
//     //xxxxxx+ a
//     //xxxxxx
// }catch{
//     //yyyyy
//     try{
//     //b= yyyyy
//     }catch{
//         b=100;
//     }
// }


//Nested try catch



// try{
//     throw new Error("throwing my error");
// }catch{
//     return false;
// }



// try{
//     const a =10;
//     a=20;
// }catch(error){
//     if(error instanceof ReferenceError){
//         console.log("Reference Error Caught");
//     }else if(error instanceof Error){
//         console.log("Error Caught");
//     }
// }





//catch binding

// try{
//     console.log("before the error");
//     console.log(a);
//     console.log("aftr the error");
// }catch({name,message}){
//     console.log(name);
//     console.log(message);
// }



















/*fun();

function fun(){
    try{
        console.log("Going inside try");
        fun1();
        console.log("try done");
        
    }catch(e){
        console.log("Provide a proper input");
        console.log("Catch done");
        throw new Error("Throwing error inside try");   // return throw break continue
    }finally{
        console.log("this execution is done.");
    }
    console.log("we are learning hard core error handling");
}

function fun1(){
    //propmt user inputting some data and wrong data can come here
    throw new Error("Wrong Input"); //Developer is throwing error
}
function fun2(){
    console.log("Inside fun2");
}
function fun3(){
    console.log("Inside fun3");
}

*/

























// const response = prompt("Are you a robot!");
// try{
//     if(response == 'Y' || response == 'Yes' || response == 'y' || response == 'yes'){
//         throw new Error("Robots are not allowed in this perimeter");
//     }
// }catch(error){
//     console.log(" I was super angry then. Please dont do such a thing with me again!");
// }









/*function startGame(){
    try{
        playgame();
    }catch(error){
        console("this is wrong!")
    }
}
startGame();

function playgame(){
    let i = prompt("Give me a number below 10");
    let j=0;
    if(i<=10){
        j= i*10+15;
    }else{

        throw new Error("Please enter correct amount");
    }
    console.log("You won "+j+" money");
}*/
