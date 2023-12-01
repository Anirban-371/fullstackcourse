$(document).ready(function(){
    

})


function stopLearning(){
    console.log(" old log");
}
$("p").click(function(){
    $(this).addClass("highlight");
});

function captureData(event){
    event.preventDefault();
    $("#name").val("Rahul")
}
