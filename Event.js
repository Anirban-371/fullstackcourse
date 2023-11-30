for(let i=0;i<100;i++){
    console.log("i:"+i)
}

setTimeout(function(){console.log("Settimeout called 1")},10000); //some thread

for(let j=0;j<1000;j++){
    console.log("j:"+j)
}

setTimeout(function(){console.log("Settimeout called 2")},2);   //some thread

for(let k=0;k<1000;k++){
    console.log("k:"+k)
}


