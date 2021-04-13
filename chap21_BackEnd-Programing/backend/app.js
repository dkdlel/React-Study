const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 접속 기록 로그를 찍는 미들웨어 추가
app.use(express.json()); // req.body에서 json 읽어 옴.
app.use(express.urlencoded({ extended: false })); // req.body 인식
app.use(cookieParser()); // 쿠키를 파싱
app.use(express.static(path.join(__dirname, 'public')));  // build 폴더를 접근할 수 있게 함

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
