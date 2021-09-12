var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoConnect = require('./mongoDb').mongoConnect;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const movieRouter = require('./routes/movieRouter')
const userRouter = require('./routes/userRouter')

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies',movieRouter);
app.use('/users',userRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

mongoConnect(()=>{
    app.listen(4000,()=>console.log("running 4000........"));
});