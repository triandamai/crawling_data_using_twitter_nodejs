var Twit = require ('twit');

var T = new Twit({
    consumer_key : '2uN0oHn1MlE2qTQd59JaO0mk1',
    consumer_secret : 'PhXZdmXTIf2WAJ8UQwFWH8BNDPxz7oQOHgSioQNk1thSkHRm9u',
    access_token : '3297519170-cOwUfZqv0aWE8qRqorFkCFIBNJhBMnF8v6xWGPO',
    access_token_secret : 'p4He0PNjUQjWH1HfgrxzzgpDc2fHPKaaeJGHpWAGgLL32',
    timeout_ms : 60*1000,
    strictSSL : true
});

// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//     console.log(data)
//   });
  
//   //
//   //  search twitter for all tweets containing the word 'banana' since July 11, 2011
//   //
//   T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
//     console.log(data)
//   });
  
//   //
//   //  get the list of user id's that follow @tolga_tezel
//   //
//   T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
//     console.log(data)
//   });
  