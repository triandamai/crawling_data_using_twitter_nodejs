const Twit = require ('twit');
const http = require ('http');
const fs = require ('fs');
var express = require('express');

var cors = require('cors');

var app = express();

// Then use it before your routes are set up:
app.use(cors());

const T = new Twit({
    consumer_key : '2uN0oHn1MlE2qTQd59JaO0mk1',
    consumer_secret : 'PhXZdmXTIf2WAJ8UQwFWH8BNDPxz7oQOHgSioQNk1thSkHRm9u',
    access_token : '3297519170-cOwUfZqv0aWE8qRqorFkCFIBNJhBMnF8v6xWGPO',
    access_token_secret : 'p4He0PNjUQjWH1HfgrxzzgpDc2fHPKaaeJGHpWAGgLL32',
    timeout_ms : 60*1000,
    strictSSL : true
});

var obj = {
  statuses: []
}

var arrData = [];


// const server = http.createServer((req, res)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json')
//   res.
//   T.get('search/tweets', { q: '#pemilu2019', count : 100 }, function(err, data, response) {  
//     res.end(JSON.stringify(data));
//    // console.log(data);
//   });
// });

var today = new Date();
app.get('/tweet', (req,res)=>{
  T.get('search/tweets', { q: '#pemilu2019',tweet_mode:'extended',count:200 }, function(err, data, response) {
    
    console.log(data);
    
    data.statuses.forEach(function(tweet){
      arrData.push(tweet.full_text);
      
     
    });
    res.end(JSON.stringify(data));

    //Linux
    // fs.writeFile("/tmp/twitter_data/"+today,JSON.stringify(arrData),function(err){
    //   if(err){
    //     return console.log(err);
    //   }
    //   console.log("the file was saved");
    // });

    //Windows
     fs.writeFile("percobaan.txt",JSON.stringify(arrData),function(err){
      if(err){
        return console.log(err);
      }
      console.log("the file was saved");
    });

    

  })
});
    
    
app.listen(4000,()=>{
  console.log("heheh");
});
