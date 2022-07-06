const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001; 
const { Profile } = require('../models/profile');
const { User } = require('../models/user');
const { v4: uuidv4} = require('uuid');

mongoose.connect("mongodb+srv://Tom:password11@cluster0.ex92r1w.mongodb.net/finalproject?retryWrites=true&w=majority") 

 

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// express reads top from bottom
// need to protect the crud operations



app.post('/auth', async (req,res) => {  
  const user = await User.findOne ({userName: req.body.userName}); 
  if(!user) {
    return res.sendStatus(401);
  }

  if(req.body.password !== user.password) {
    return res.sendStatus(403);
  }

  user.token = uuidv4();
  await user.save();
  res.send({token: user.token});
})



app.use( async (req,res,next) => {
  const authHeader = req.headers['authorization'];
  const user = await User.findOne({token: authHeader});
  if(user){
    next();
  } else {
    res.sendStatus(403);
  }

})


// defining CRUD operations
 app.get('/', async (req, res) => {
   res.send(await Profile.find());
 });

//filter by event name
// app.sort('/:eventLocation', async (req, res) => {
//   await Event.filter({ eventLocation: ObjectId(req.params.eventName, req.params.eventLocation, req.params.eventDetails, req.params.price) })
//   res.send({ message: 'Events Filtered by Location.' });
// });


// exports.sort = function (req, res, next) {
//   const bookitem = booklist.filter((book) => book.type == req.params.type)
//   if(!bookitem) {
//       return(next(createError(404, "no books of that type")))
//   }
//   res.send(bookitem)
// }

// create new Profile
app.post('/', async (req, res) => {
  const newProfile = req.body;
  const profile = new Profile(newProfile);
  await profile.save();
  res.send({ message: 'New Profile inserted.' });
});


// deletes an Profile
app.delete('/:id', async (req, res) => {
  await Profile.deleteOne({ _id: ObjectId(req.params.id) })
  res.send({ message: 'Profile removed.' });
});


// update an Profile
app.put('/:id', async (req, res) => {
  await Profile.findOneAndUpdate({ _id: ObjectId(req.params.id)}, req.body )
  res.send({ message: 'Profile updated.' });
});


// starting the server
app.listen(port, () => {
  console.log('listening on port 3001');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Database connected!")
});

