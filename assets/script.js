// Display current day
var date = moment().format('MMMM Do YYYY');
$("#currentDay").text(date);

//ask for current hour
var currentHour = parseInt(moment().format("H")); 


//loop through past, present, future based on time
$("textarea").each(function() {
    var calendarHour = parseInt(this.id);

        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');

        if (calendarHour < currentHour) {
        $(this).addClass("past")
        } 
        else if (calendarHour === currentHour) {
            $(this).addClass("present")
        }
        else if (calendarHour > currentHour) {
            $(this).addClass("future")
        }
    

    console.log("textarea");
}) 


