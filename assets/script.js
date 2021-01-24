// Display current day
var date = moment().format('MMMM Do YYYY');
$("#currentDay").text(date);

//ask for current hour
var currentHour = moment().format("H"); 


//loop through past, present, future based on time
$("textarea").each(function() {
    for(i = 0; i < 9; i++) {
        if (currentHour > i) {
        $("textarea").addClass("past")
        }
        if (currentHour < i) {
            $("textarea").addClass("present")
        }
        if (currentHour === i) {
            $("textarea").addClass("future")
        }
    }

    console.log("textarea");
})


