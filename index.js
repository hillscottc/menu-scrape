const request = require("tinyreq");
const Promise = require('es6-promise').Promise;

const url = "http://ionicabizau.net/";


function requestp(url, json) {
  json = json || false;
  return new Promise(function (resolve, reject) {
    request({url:url, json:json}, function (err, res, body) {
      if (err) {
        return reject(err);
      } else if (res.statusCode !== 200) {
        err = new Error("Unexpected status code: " + res.statusCode);
        err.res = res;
        return reject(err);
      }
      resolve(body);
    });
  });
}


request(url, function (err, body) {
  console.log(err || body); // Print out the HTML
});