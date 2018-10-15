require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require('morgan');
const session = require('express-session')
const passport = require('./config/passport');
const MongoStore = require('connect-mongo')(session);
const formData = require('express-form-data');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.use(cors({ 
//     origin: CLIENT_ORIGIN 
//   })) 
  
  app.use(formData.parse())


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		resave: false, //required
        saveUninitialized: false,//required        
        store: new MongoStore({ url: process.env.MONGODB_URI || "mongodb://localhost/loopfeed" }),
	})
)
app.use( (req, res, next) => {
    console.log('req.session', req.session);
    return next();
});

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser



// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/loopfeed");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
