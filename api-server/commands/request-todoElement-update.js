/* eslint no-undef: 0*/
var axios = require('axios');
var fakeData = require('../src/models/fakeData.json');

function sendPUTRequest(data) {
  return axios.post('http://localhost:8080/api/todoElements', data);
}
if (Array.isArray(fakeData)) {
  Promise.all(fakeData.map((v, index) => sendPUTRequest(fakeData[index])
    ))
    .then(() => {
      console.log('all done');
    })
    .catch((err) => {
      console.log(err);
    });
}
