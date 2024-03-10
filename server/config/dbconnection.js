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


