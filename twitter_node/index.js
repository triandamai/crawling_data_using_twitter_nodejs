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
  // var params = {count:100,tweet_mode='extended'};
  T.get('search/tweets', { q: '#pemilu2019',tweet_mode=extended }, function(err, data, response) {  
    res.end(JSON.stringify(data));
    data.statuses.forEach(function(tweet){
      arrData.push(tweet.text);
      // console.log("tweet : "+tweet.text);
    });
    fs.writeFile("/tmp/twitter_data/"+today,JSON.stringify(arrData),function(err){
      if(err){
        return console.log(err);
      }
      console.log("the file was saved");
    });
    // var jsonData = JSON.parse(data);
   // obj.statuses.push(data);
    // arrData.push(data.text);
    // const tasks = JSON.stringify(data);
    // obj['statuses'](function(data){
    //   console.log(data);
    // });
    // obj.statuses.statuses.forEach(function(item){
    //   console.log(item.text);
    // });
    // console.log(arrData);
    // obj.forEach(function (data) {
    //   arrData.push(data.text);
    //   console.log(data);
    //   // arrData.push(data.text);
    // });
    // arrData = obj.statuses.map(function (data){
    //   console.log(data.text);
    //   return data.text;
    // });
    // for(var i=0; i<obj.length;i++){
    //   var counter = obj[i];
    //   console.log(counter);
    // }
    // fs.writeFile("/tmp/twitter_data/"+today,JSON.stringify(arrData),function(err){
    //   if(err){
    //     return console.log(err);
    //   }
    //   console.log("the file was saved");
    // });
   // console.log(data);
  });
})


// var http = http.createServer(function (req, res){
//   T.get('search/tweets', { q: '#pemilu2019', count : 100 }, function(err, data, response) {  
//     res.end(JSON.stringify(data));
//     console.log(data);
//   })

// });
//http.listen(4000);

// server.listen(port, hostname, ()=>{
//   console.log('server = ${hostname}');
// });
app.listen(4000,()=>{
  console.log("heheh");
})
