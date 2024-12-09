// const express = require('express')
// const app = express()
// const port = 3000
// var mysql = require('mysql2');
// const cors = require('cors');

// app.use(express.json());
// app.use(cors());


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "test",
//   password: "admin"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// app.get('/get', (req, res) => {
//     con.query('SELECT * FROM products', function (err, result, fields) {
//       if (err) throw err;
//       res.json(result); // Send the result as a JSON response
//     });
//   });
   

 
// app.post('/admin', (req, res) => {
//   const {title ,price} = req.body 
//   console.log(req.body);
  

//   if(title || price){
//     con.query(`insert into products (title , price) values (${title},${price}) `, function (err, result) {
//      if (err) throw err;
//      console.log("done");
//      res.send('done')
//     }); 
//   } 

// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// React Code


// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data2, setdata] = useState();
//   const [title, settitle] = useState();
//   const [price, setprice] = useState();
//   const [pic, setpic] = useState();

//   useEffect(() => {
//    fetch("http://localhost:3000/get").then(data => setdata(data.json()))
//   },[])
//   console.log(data2);


//   const submit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:3000/admin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title, price }),
//     });

//     if (response.ok) {
//       console.log("Product added successfully");
//     } else {
//       console.error("Failed to add product");
//     }
//   };
  

//   return (
//     <>
//       <center>
//         <h1>admin page</h1>
//         <form onSubmit={submit} method="POST">
//           <input
//             type="text"
//             placeholder="product name"
//             value={title}
//             onChange={(e) => {
//               settitle(e.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <input
//             type="number"
//             placeholder="price"
//             value={price}
//             onChange={(e) => setprice(e.target.value)}
//           />
//           <br />
//           <br />
//           <label htmlFor="pic">upload image </label>
//           <input type="text" name="pic" 
//             value={pic}
//             onChange={(e) => setpic(e.target.value)}
//           />
//           <br />
//           <br />
         
//           <input type="submit" value="click" />
//         </form>
//       </center>
//     </>
//   );
// };
// export default App;