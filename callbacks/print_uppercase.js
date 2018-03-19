var getHTML = require('./http-functions');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  }
  function printoUppercase (html) {
    var uppercase = html.toUpperCase()
    console.log(uppercase);
  }

getHTML(requestOptions, printoUppercase);