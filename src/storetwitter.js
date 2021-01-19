const Twitter = require('twitter');
require('mongoose');
require('dotenv/config');
console.log("Application Started");


    apikey = process.env.apikey
    apikeysecret =process.env.apikeysecret
     accesstoken =process.env.accesstoken
    accesstokensecret =process.env.accesstokensecret

var client = new Twitter({
    consumer_key: apikey,
    consumer_secret: apikeysecret,
    access_token_key: accesstoken,
    access_token_secret: accesstokensecret
  });
 
  var params = {screen_name: 'MalharWho'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
       console.log(tweets);
    }
     
  });

  client.post('statuses/update', {status: 'I Love coding'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });

  
  client.get('search/tweets', {q: 'amitabh'}, function(error, tweets, response) {
    console.log(tweets);
 });