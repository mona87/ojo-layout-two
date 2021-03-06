var express = require('express');
var app = express();
var path = require('path');


/* view at http://localhost:8080 */
var port = process.env.PORT || 3000;
app.use(express.static(__dirname));

app.get('/', function(req, res) {
	// res.sendFile(path.join(__dirname + '/public/pdf.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.listen(port, function(){
    console.log('Service started on port:' + port);
});
