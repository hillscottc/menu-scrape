const request = require("request");
const Promise = require('es6-promise').Promise;



const url = "https://raw.githubusercontent.com/hillscottc/menu-scrape/master/README.md";



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


requestp(url, false).then(function (data) {
  console.log("%s@%s: %s", data.name, data.version, data.description);
}, function (err) {
  console.error("%s; %s", err.message, url);
  console.log("%j", err.res.statusCode);
});