

/* EXPOSE API */

exports.save = save

var fs = require('fs')
var db_dir = './public/catz.json'

function getCatz() {
  var db = fs.readFileSync(db_dir).toString();
  console.log(db);
  if (db) {
   return JSON.parse(db);
  }
}


function save(obj) {  
  var cats = getCatz()
  cats.push(obj)
  var catString = JSON.stringify(cats)
  fs.writeFileSync(db_dir, catString)
}

save({ thing: "thing" })

// openParse()













