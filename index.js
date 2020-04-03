var express = require('express');
var app = express();
var nodemon = require('nodemon')
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./app/db/db.js');

db.sequelize.sync({ force: false , alter : true }).then(() => {
    console.log('Drop and Resync with { force: false }');
  });
// app.get("/index", (req, res) => {
//     res.json({status: "working", message: "Welcome"})
// })
require('./app/routes/tasks.route.js')(app);


app.listen(5000,()=>console.log('Server @ port 5000'));