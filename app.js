var express = require('express')
var app = express()
var fs = require('fs')

var html = fs.readFileSync('index.html').toString()


app.configure(function(){
  app.set('view engine', 'hjs');
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
  res.send(html);
});


app.post('/file-upload', function(req, res) {
    // get the temporary location of the file
    var tmp_path = req.files.thumbnail.path;
    // put files in kittybase
    var target_path = './public/images/' + req.files.thumbnail.name;
    // move the file from the temporary location to the intended location
    fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // delete the temporary file
        fs.unlink(tmp_path, function() {
            if (err) throw err;
            res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
        });
    });
});

app.get('/all', function(req, res) {
var allCats = "hey";
res.render('index', allCats);
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

app.listen(3000)
console.log('yo im on 3000')