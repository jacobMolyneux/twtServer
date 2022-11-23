var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const mongoDB = "mongodb+srv://jacobmolyneux:Pigpen123@cluster0.22xuaw2.mongodb.net/?retryWrites=true&w=majority"

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth')
// username: jacobmolyneux
//password: Pigpen123
//mongodb+srv://jacobmolyneux:Pigpen123@cluster0.22xuaw2.mongodb.net/?retryWrites=true&w=majority
var app = express();
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRouter)

module.exports = app;
