var getHTML = require('./http-functions');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  }
  function printToLowercase (html) {
    var lowercase = html.toLowerCase()
    console.log(lowercase);
  }

getHTML(requestOptions, printToLowercase);