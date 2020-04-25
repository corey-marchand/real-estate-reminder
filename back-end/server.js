const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//allows us to put enviiornmen,t variable in our .env file
require('dotenv').config();

// creating express server
const app = express();
const port = process.env.PORT || 5000;

// our middleware
app.use(cors()); //cors middleware
app.use(express.json()); //allowing to parse our json to the server

const uri = process.env.ATLAS_URI;

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

const connection = mongoose.connection;
connection.openUri('open', () => {
  console.log('MongoDB database connection establishd successfully');
});

// requiring routes files in order to use them
const reminderRouter = require('./routes/reminder');
const userRouter = require('./routes/users');

// when someone goes to /user, it will load everything in the user Router file
app.use('/users', userRouter);
// when someone goes to /user, it will load everything in the reminder Router file
app.use('/reminder', reminderRouter);

// WHat is starting the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});