//let favAnimal = prompt("Give me your fav animal");
//console.log(favAnimal);
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) );

function doSomething(){
    let element = document.getElementById("animalList");
    const animalListNode= document.createElement("li");
    animalListNode.innerText= favAnimal;
    element.appendChild(animalListNode);
    //element.removeChild(element.firstElementChild);
    //element.removeChild(element.children[2]);
    const newNode= document.createElement("li");
    newNode.innerText= "Rhino";
    let specificElement = document.getElementById("animalList").childNodes[2]; //children
    element.replaceChild(newNode, specificElement); //source, destination
}




































//go to the specific id //get that specific id
// put the html element inside that id

// const res= prompt("Enter a value!");
// console.log(res);

// let elementClass = document.getElementsByTagName("div");

// for(let i=0;i<elementClass.length;i++){
//     if(res>50){
//         elementClass[0].style.backgroundColor="green";
//     }else{
//         elementClass[0].style.backgroundColor="red";
//     }
// }

//eventListner

// document.addEventListener("click", getStarted);

// function getStarted(){
//     alert("Hello World");
// }


// function demoFunction(){
//     let element = document.getElementById("sumDemo");

//     let input = Math.floor(Math.random(100)*100);
//     console.log(input);
//     if(input>50){
//         element.classList.add("showStyle");
//         element.classList.remove("changeStyle");
//     }else{
//         element.classList.add("changeStyle");
//         element.classList.remove("showStyle");
//     }
// }
















// let arr = ["red", "yellow", "green", "blue"]
// let salary =1000;

// let result = document.getElementByClassName("sumDemo");
// //let i = prompt("Give a number.");

// let arr1 =[2,5,6,8,9];

// arr.push("black");
// arr.unshift("white");

// result.innerHTML = "<p>"+arr+"</p>";


//paint();

/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function paint(){
    let result = document.getElementById("sumDemo");
    for(let i =0;i<arr.length;i++){
        if(i%2==0){
            result.innerHTML = "<h5 style='background-color: "+yellow+"'>This is even because i is:"+i+".</h5>";
        }else{
            result.innerHTML = "<h5 style='background-color: "+arr[i]+"'>This is odd because i is:"+i+".</h5>";   
        }
        await sleep(6000); // Makes you wait for n/1000 seconds
    }
 }
*/