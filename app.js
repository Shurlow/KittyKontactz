

var express = require('express')
var fs = require('fs')


var app = express()

app.use( express.logger('dev') );
app.set('view engine', 'hjs');
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname + '/public'));


var kittybase = require('./kittybase')


var html = fs.readFileSync('index.html').toString()

app.get('/', function(req, res){
  res.send(html);
});


app.post('/file-upload', function(req, res) {

  console.log(req.headers)
  console.log(req.body)
  console.log(req.files)

  // get the temporary location of the file
  var tmp_path = req.files.thumbnail.path;

  // put files in kittybase
  var target_path = './public/images/' + req.files.thumbnail.name;

  // move the file from the temporary location to the intended location
  fs.rename(tmp_path, target_path, function(err) {
    if (err) throw err;

    // maybe save your cat here!

    kittybase.save(req.body);

    // delete the temporary file
    fs.unlink(tmp_path, function() {

      if (err) throw err;

      // mabye you send back the saved cat? 
      res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');

    });

  });

});

app.get('/all', function(req, res) {
  var allCats = "hey";
  res.render('index', allCats);
})

app.get('/cat4', function(req, res) {
  
  var cat4 = kittybase.findCatById(4)
  res.redner('cat', cat4)

})

app.get('/template', function(req, res) {
 
  var fake = { 

    katnamz: [
     , name: "karly"
     , "jaredia"
     , "breath"
     , "burpy"
    ]
  }

  res.render('index', fake)
 
}) 

app.listen(3000)
console.log('yo im on 3000')


