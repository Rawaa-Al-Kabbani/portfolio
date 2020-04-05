const data = require('./data.js');
const express = require('express');
const path = require('path');
const port = 2000;
const app = express();
const indexFilePath = path.join(__dirname, 'public', 'index.html');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/public')));

app.get('/getProjects', (request, response) => {
  data.getProjects().then(projects => {
    response.send(projects);
    response.end();
  });
});

app.post('/createProject', (request, response) => {
  const body = request.body;
  data.saveProject(body.title, body.about, body.link);
  response.send(body.title);
  response.end();
});
app.post('/verifyUser', (request, response) => {
  const body = request.body;
  let res = data.verifyUser(body.user, body.password);
  if (res === 1) {
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
