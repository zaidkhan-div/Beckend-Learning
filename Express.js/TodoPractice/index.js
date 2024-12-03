const express = require('express')
const app = express()
const port = 3000;


const todos = [
  {
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },

  {
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];


app.get('/todo',(req,res)=>{
  res.status(200).json(todos)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})