let a = setTimeout(function() {
    console.log("I just got executed first");
}, 5000)

let b = setTimeout(function() {
    console.log("I just got executed second");
}, 5000)

let c = setTimeout(function() {
    console.log("I just got executed third");
}, 5000)


clearTimeout(a);
clearTimeout(c);

//console.log("Sum function result to be printed here");

var sum= function(a,b){
    let c=a+b+10;
    console.log(c);
    return c;
}


setTimeout(sum, 3000, 10, 20);

let element = document.getElementById("timer");
let seconds = 300;
let sec = 60;
let c1 = setInterval(function() {
    let min = seconds/60-1;
    
    element.innerHTML = min +":"+ sec;
    sec--;
}, 1000)

function ()
    clearInterval(c1);
