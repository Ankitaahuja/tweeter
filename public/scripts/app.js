

function createTweetElement(tweetData, displayTime){

    var element = `<article class='tweet-box'>
    <header>
      <span class = 'avatar-user'>
     <img class= 'inline' src="${tweetData.user.avatars.small}"/>
      <h3 class= 'inline'> ${tweetData.user.name}</h3>
      </span>
      <p class= 'handler'> ${tweetData.user.handle}</p>
    </header>
    <div class='firstpart'>
        <div class='middlepart'>
         ${tweetData.content.text}
        </div>
        <footer>
        <div class='lastpart'>
            ${displayTime}
        </div>
        <div class= 'icons'>
                <i class='fas fa-flag'></i>
                <i class='fas fa-retweet'></i>
                <i class='fas fa-heart'></i>
        </div>
        </footer>
    </div>
  </article>`;
  return element;
}


function convertTimeToString(time){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(time / cd),
        h = Math.floor( (time - d * cd) / ch),
        m = Math.round( (time - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
  if( m === 60 ){
    h++;
    m = 0;
  } 
  if( h === 24 ){
    d++;
    h = 0;
  }
  return d +" days ago";
};

function renderTweets(data){

  
    data.sort((a, b) => b.created_at - a.created_at);

    data.forEach(element => {
      var currentTime = Date.now();
      var tweetTime = element.created_at;
      var displayTime = currentTime - tweetTime;
      
        var tweet = createTweetElement(element,convertTimeToString(displayTime));
        $('#tweets-container').append(tweet);

    });
}

$(document).ready(function() {

    loadTweets();
    
    $("#compose").click(function(){
      $(".new-tweet").slideToggle("slow", function() {
        $("#textarea").focus();
      });
    });

    $(".compose-button").click(function(){

      $(window).scrollTop(0);
      $(".text-holder").focus().select();

    });


    $(".new-tweet__form").on("submit", function(event) {
        event.preventDefault();

        if($(".text-holder").val().length>140){
            $(".error-message").slideDown().text("Exceed the maximum word limit!");
        }else if($(".text-holder").val().length == 0){
            $(".error-message").slideDown().text("Tweet cannot be empty!");
        }else{
          $.post('http://localhost:8080/tweets', $(this).serialize(), function(response){ 
            $('#tweets-container').empty();  
            $("#tweet-text").val("");
            $(".counter").html("140");
            loadTweets();
          });

        }

    });
   
}); 

   

function loadTweets(){
  
    $.get('http://localhost:8080/tweets', function(response){ 
        renderTweets(response);
    });
};

