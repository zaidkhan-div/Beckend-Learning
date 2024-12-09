const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


// Serving Statics Files
// express.static(root, [options])
//app.use(express.static('public'))

// app.use(express.static('public'))
// app.use('/public',express.static('public'))

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))


// For Example

// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html


app.get('/', (req, res) => {
    res.send('Hello world')
})







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})