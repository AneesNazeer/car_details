var express = require('express')
var app = express()
var bodyparser = require("body-parser")


var mysql = require("mysql")


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'car_colllection'
  });


  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database with connection id ' + connection.threadId);
  });


app.post("/details",(req,res)=>{
    var Selectdetails = connection.query(`SELECT * FROM car_details `,(err,result)=>{
        if(err){
            return console.log(err)
        }
         console.log(result)
         res.send(result)
    })
    console.log(Selectdetails)
})


app.listen(8080, () => {
    console.log('Server started on port 3000');
  });