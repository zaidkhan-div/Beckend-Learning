const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
var mysql = require('mysql');



var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@mysql!12#"
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});



app.get('/', (req, res) => {
    res.send('Hello final Project')
})




 



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})