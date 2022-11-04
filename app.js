const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json()); 


// routes

app.use('/api/v1/tasks', tasks);
// app.use(notFound)
app.use(errorHandlerMiddleware)

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a new task
// app.get('/api/v1/tasks/:id')      - get a single task
// app.patch('/api/v1/tasks/:id')    - update a task
// app.delete('/api/v1/tasks/:id')   - delete a task


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    console.log('trying to connect to db');
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port} ...`))
  }
  catch (error) {
    console.log(error, 'could not start the server');
  }
}

start();


