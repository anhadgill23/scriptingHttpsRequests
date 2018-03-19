var getHTML = require('./http-functions');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  }
  function printReverse (html) {
    var reverse = html.split('').reverse().join('')
    console.log(reverse);
  }

getHTML(requestOptions, printReverse);