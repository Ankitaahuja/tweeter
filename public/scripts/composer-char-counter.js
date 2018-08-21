
var presentCharValue = 0;
const TotalAllowedChar = 140;
var pendingCharCount = 0;


$(document).ready(function() {

   $(".text-holder").on("input", function(){

        presentCharValue = $(".text-holder").val().length;
    
        pendingCharCount = TotalAllowedChar - presentCharValue;
    
       $(".counter").text(pendingCharCount);//.text will change the test(char number)

       if(pendingCharCount < 0){
          $(".counter").addClass("redcolor"); //it will change it to red
       }else{
        $(".counter").removeClass("redcolor"); 
       }
    });
    
  });
