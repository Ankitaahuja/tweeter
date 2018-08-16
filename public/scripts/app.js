/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// function createTweetElement(data){
//     var tweet = $("<article>").addClass("tweet-box");
//     var header = $("<header>");
//     var span = $("<span>").addClass("avatar-user");
//     var img = $("<img>").addClass("inline").attr("src", data['user']['avatars']['small']);
//     var name = $("<h3>").addClass("inline").text(data['user']['name']);
//     span.append(img);
//     header.append(span);
//     tweet.append(header);
//     console.log(tweet);



//     return tweet;
// };


// function renderTweets(data){

//     data.forEach(element => {
        
//         createTweetElement(element);
//     });
//   }

function createTweetElement(tweetData){
    
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
            ${convertTimeToString()}
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

    return "12 days ago";
}

const tweetData = {
    "user": {
      "name": "Newton",
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
  }
  
  
  const data = [
    {
      "user": {
        "name": "Newton",
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
  
  

function renderTweets(data){

    data.forEach(element => {
        
        var tweet = createTweetElement(element);
        $('#tweets-container').append(tweet);

    });
}

  
  $(document).ready(function() {
    renderTweets(data);
  });


//   $.get('http://localhost:8080/tweets',  function(response){ 
//      alert("success"+response.tweets);  
//      renderTweets(response.tweets);
//  });



// $( "form" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
// });


// function refreshTweets(){

//     $.get('http://localhost:8080/tweets',  function(response){ 
//         alert("success"+response.tweets);  
//         renderTweets(response.tweets);
//     });
// }
 