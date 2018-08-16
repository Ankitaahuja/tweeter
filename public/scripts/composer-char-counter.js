/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
var presentCharValue = 0;
const TotalAllowedChar = 140;
var pendingCharCount =0;

$(document).ready(function() {

   $(".text-holder").on("input", function(){

    presentCharValue= $("").val().length;
    
        pendingCharCount = TotalAllowedChar - presentCharValue;
    
       
       $(".counter").text(pendingCharCount);//.text will change the test(char number)

       if(pendingCharCount < 0){
        $(".counter").addClass("redcolor"); //it will change it to red
       }
       else{
        $(".counter").removeClass("redcolor"); 
       }
    });
    
  });
//   $("p").click(function(){
//     $(this).hide();
// })