const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());


const todos = [
  {
    id: 1,
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },

  {
    id: 2,
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    id: 3,
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    id: 4,
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    id: 5,
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
];


// Basic Routing
// app.METHOD(PATH, HANDLER)

/* app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched. */


// Getting Todos Route

app.get('/todo', (req, res) => {
  res.status(200).json(todos)
})

// UseParams to get an individial object from the todos using id's

app.get('/todo/:id', (request, response) => {
  const todo = todos.find((todo) => todo.id == request.params.id);
  // console.log(todo);
  if (todo) {
    response.status(200).json(todo);
  }
  else {
    response.send('Could not get the id')
  }

}) // This worked i can get the obj with id



// PUT: Like editing an already written note in your notebook.
// Put Method where we update the existing Object 

app.put('/todo/:id', (req, res) => {
  const findTodo = todos.find((todo) => todo.id == req.params.id);
  if (findTodo) {
    const { title, desc, completed } = req.body;
    findTodo.title = title;
    findTodo.desc = desc;
    findTodo.completed = completed;
    res.status(200).json({ msg: "Todo Updated Succesfully" });
    return;
  }
  res.status(404).json({ msg: "Could not update Todo" })

});



// POST: Like adding a new note to your notebook.
// Post Method Where addd Push another a new Object

app.post('/todo', (req, res) => {
  try {
    todos.push(req.body);

    res.status(201).json({ msg: "Todo Added Succesfully" });
  }
  catch {
    res.status(404).json({ msg: 'Could not added' })
  }
}) // This is working Fine i have added



// Delete Method 

app.delete("/todo/:id", (request, response) => {

  const todoIndex = todos.findIndex((todo) => todo.id == request.params.id);

  if (todoIndex) {
    todos.splice(todoIndex, 1);
    response.status(200).json({ msg: "Todo deleted successfully" });
  }
  else {
    response.status(404).json({ msg: "Todo not found" });
  }
}); // Delete Mehtod Worked Properly















// Complete app Route

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})