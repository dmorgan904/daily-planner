//var date = new Date();
//document.getElementById("currentDay").innerHTML = date; 

// Display current day
var date = new Date();
moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = date; 

/*document.querySelector(".info").addEventListener("click", function(event) {
    if (event.target.matches(".info-item")) {
        console.log("You did it!");
    }
}) */

/*$(".info").on("click", ".info-item", function() {
    console.log("You did it!");
}); */

$(".info").on("click", ".info-item", function() {
    var text = $(this).text();
    var textInput = $("textarea").addClass("")
    console.log(text);
}); 
