
var express = require('express')
var app = express()
var fs = require('fs')
// var $ = require('jQuery')

// "DB"
//
// to "read"
// fs.readFile(....) JSON.parse 
//
// to "write"
// fs.writeFile ()  JSON.stringfy
//
//

// enable the use of templates like so
app.set('view engine', 'hjs')

app.get('/new', function(req, res) {

    var newCat = 'im a cat';

    res.render('input', newCat )


})

app.get('/all', function(req, res) {

  // get all cats from the "kittybase"
  // assign them to an object called all kittys
  // call res.render( templatename, kittys )


})

app.get('/template', function(req, res) {
 
  var fake = { 

    katnamz: [
     , "karly"
     , "jaredia"
     , "breath"
     , "burpy"
    ]

  }

  res.render('index', fake)
 
}) 

var getForm = function{

  $('catForm').sumbit


};

app.listen(3000)
console.log('yo im on 3000')





