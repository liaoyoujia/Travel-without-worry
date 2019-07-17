let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

let blogRouter = require('./routes/blog');
let usersRouter = require('./routes/users');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const redisClient = require('./db/redis')
const sessionStore = new RedisStore({
  client: redisClient
})
app.use(session({
  secret: 'WJiol#23123_',
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  cookie: {
    // path: '/',   // 默认配置
    // httpOnly: true,  // 默认配置
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore
}))
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogRouter);

module.exports = app;
