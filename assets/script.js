// Display current day
var date = moment().format('MMMM Do YYYY');
$("#currentDay").text(date);

//ask for current hour
var currentHour = parseInt(moment().format("H")); 

var ls = localStorage

$("button").on("click", function(event) {
    var arr = this.id.split("-");
    var calendarEntryId = arr[1];
    var calendarTextElement = '#' + calendarEntryId;
    var calendarText = $(calendarTextElement).val();

    // Save to local storage
    ls.setItem(calendarEntryId, calendarText);
    }
); 

//loop through past, present, future based on time
$("textarea").each(function() {
    var calendarHour = parseInt(this.id);

        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');

        // Retrieve from local storage
        if(ls.getItem(calendarHour) != null) {
            $(this).val(ls.getItem(calendarHour));
        }

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


ls.getItem(calendarEntryId, calendarText);
