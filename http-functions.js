module.exports = function getHTML (options, callback) {
    /* Your code here */

    /* Add your code here */
    var https = require('https');
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
};