const express = require('express');
const app = express();
const port = 5001;

const dotenv = require('dotenv');
dotenv.config();

app.use(session({
  store: new pgSession({
    conString: 'postgres://6d2d9670fc15dd99d233a0bb007dae891dcd2962cd523faf36d76d8b297b3354@ec2-44-198-223-154.compute-1.amazonaws.com:5432/daa3sd4s3t6rnh',
  }),
  key: 'kwnfprkjxqpmmi',
  secret: '6d2d9670fc15dd99d233a0bb007dae891dcd2962cd523faf36d76d8b297b3354',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 10 * 10 * 6000000 },
}));

app.use('/user', require('./route/user'));
app.use('/psychologist', require('./route/psychologist'));
app.use('/diary', require('./route/diary'));


if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;