const firebase = require('firebase-admin');
require('dotenv').config();

const emailLog = process.env.Email_Log;
const passwordLog = process.env.Password_Log;

var serviceAccount = require('./firebase-config.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://portfolio-fd748.firebaseio.com',
});
let database = firebase.database();

function verifyUser(email, password) {
  if (email === emailLog && password === passwordLog) {
    return 1;
  }
  return -1;
}
function saveProject(titleValue, aboutValue, linkValue) {
  database.ref('projects/' + titleValue).set({
    about: aboutValue,
    link: linkValue,
  });
}

function getProjects() {
  return new Promise(resolve => {
    let ref = database.ref('projects');
    let arr = [];
    ref.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        childAbout = childSnapshot.val().about;
        childLink = childSnapshot.val().link;
        arr.push({ key: childSnapshot.key, about: childAbout, link: childLink });
      });
      resolve(arr);
    });
  });
}
module.exports = { saveProject, getProjects, verifyUser };
