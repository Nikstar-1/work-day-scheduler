//Display current day on front page
var nMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var display = $('#currentDay');
display.text(nMoment);
//ready function
$(document).ready(function() {
    // Listen for save button clicks  
    $(".saveBtn").on("click", function() {
      //Values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
     //Save input to localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      //Get current number of hours
      var currentHour = moment().hours();
  
      //Loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
     // Load saved data from localStorage 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    hourUpdater();
  
    // Check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
    
    //Show the current day on front page in below format using moment
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  
  

