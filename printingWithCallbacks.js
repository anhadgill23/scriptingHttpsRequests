var https = require('https');

function getHTML (options, callback) {

    /* Add your code here */
    var chunkOfData = '';

    https.get(options, function (response) {

      // set encoding of received data to UTF-8
      response.setEncoding('utf8');

      // the callback is invoked when a `data` chunk is received
      response.on('data', function (data) {
        chunkOfData += data;
      });

      response.on('end', function () {
          callback(chunkOfData)
      });

    });
  }


  function printHTML (html) {
    console.log(html);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions, printHTML);