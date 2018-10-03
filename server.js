const express = require('express');

const app = express();

const bodyParser = require('body-parser')

var fs = require('fs');
var path = require('path');


app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

//this is just a function for importing routes from different files. gun relevent bits are in routes/gun.js
function recursiveRoutes(folderName) {
  fs.readdirSync(folderName).forEach(function(file) {

      var fullName = path.join(folderName, file);
      var stat = fs.lstatSync(fullName);

      if (stat.isDirectory()) {
          recursiveRoutes(fullName);
      } else if (file.toLowerCase().indexOf() === -1) {
          require('./' + fullName)(app);
          console.log("require('" + fullName + "')");
      }
  });
}
recursiveRoutes('routes'); // Initialize it

const port = 5000;

app.listen(port, () => {console.log(`Server running on port ${port}`, "mello")});
console.log("here");
