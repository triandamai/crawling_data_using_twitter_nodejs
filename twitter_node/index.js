const Twit = require ('twit');
const fs = require ('fs');
var express = require('express');
//buat prosesing data
var natural = require('natural');
var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();
var tokenizer = new natural.WordTokenizer();
var today = new Date();

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
  tokenizing: [],
  stemming : [],
  text_mentah :[]
}
var parameter ={
  q: '#pemilu2019',
  tweet_mode:'extended',
  count:200
}
app.get('/react',(req,res)=>{
  T.get('search/tweets', parameter, function(err, data, response) {
    res.end(JSON.stringify(data,null,4));
  });
});
app.get('/tweet', (req,res)=>{
  T.get('search/tweets', parameter, function(err, data, response) {
    data.statuses.forEach(function(tweet){
      obj.text_mentah.push(tweet.full_text);
    });
    const string = obj.text_mentah.toString();
    obj.tokenizing.push(tokenizer.tokenize(string));
    obj.stemming.push(natural.StemmerId.stem(obj.tokenizing.toString()));

    res.end(JSON.stringify(obj));
    //Linux
    // fs.writeFile("/tmp/twitter_data/"+today,JSON.stringify(arrData),function(err){
    //   if(err){
    //     return console.log(err);
    //   }
    //   console.log("the file was saved");
    // });

    //Windows
     fs.writeFile("hasil.json",JSON.stringify(obj,null,4),function(err){
      if(err){
        return console.log(err);
      }
      console.log("the file was saved");
    });
  })
});
    
app.listen(4000,()=>{
  console.log("port:4000");
});
