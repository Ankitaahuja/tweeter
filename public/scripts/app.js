
const data = [
    {
      "user": {
        "name": "Newton2",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

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
      console.log(currentTime);
      var tweetTime = element.created_at;
      console.log(tweetTime);
      var displayTime = currentTime - tweetTime;
      console.log(convertTimeToString(displayTime));
      
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
          console.log("---calling Ajax POST request--");

          $.post('http://localhost:8080/tweets', $(this).serialize(), function(response){ 
            $('#tweets-container').empty();  
            $("#tweet-text").val("");
            $(".counter").html("140");
            loadTweets();
          });

        }

        // $(".new-tweet__submitBtn").click(function () {
        //   $(".error-message").slideUp();
        // });
    });
   
}); 

   

function loadTweets(){
    
    console.log("---calling Ajax GET request--");

    $.get('http://localhost:8080/tweets', function(response){ 
        renderTweets(response);
    });
};

