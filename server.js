var express = require('express');
var path = require('path');
var app = express();

//serve static assets normally
app.use(express.static(__dirname + '/dist'));
app.use('/app', express.static(__dirname + '/app'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(process.env.PORT || 8080);
