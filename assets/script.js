// Display current day
/* var date = function() {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
}; */

var updateInfo = function () {
    date = moment();
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function() {
    datetime = $('#currentDay')
    updateInfo();
    setInterval(updateInfo, 1000);
    refresh();
}); 

var refresh = function() {

}
/*moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = date; */

var currentHour = moment().format("H"); 

/*$(".info").on("click", ".info-item", function() {
    console.log("You did it!");
}); */

/*$(document).ready(function() {
    date = 
}) */