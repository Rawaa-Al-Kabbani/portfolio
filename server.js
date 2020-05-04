const data = require('./data.js');
const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();
const port = 2000;
const app = express();
const indexFilePath = path.join(__dirname, 'public', 'index.html');

app.use(
  session({
    secret: process.env.Session_Secret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/public')));

app.get('/getProjects', (request, response) => {
  data.getProjects().then((projects) => {
    response.send(projects);
    response.end();
  });
});

function requireAdmin(request, response, next) {
  if (request.session.isAdmin) {
    return next();
  }
  response.status(403).end();
}

app.post('/createProject', requireAdmin, (request, response) => {
  const body = request.body;
  data.saveProject(body.title, body.about, body.link);
  response.send(body.title);
  response.end();
});

app.post('/verifyUser', (request, response) => {
  const body = request.body;
  let res = data.verifyUser(body.user, body.password);
  if (res === 1) {
    request.session.isAdmin = true;
    response.redirect('/editProject');
  } else {
    response.redirect('/admin');
  }
  response.end();
});

app.get('*', (request, response) => {
  response.sendFile(indexFilePath);
});

app.listen(port);
