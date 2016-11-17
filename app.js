var express = require('express');
var routes  = require('./routes/index.js');

var app = express();
app.set('view engine', 'ejs');

// app.use("/public", express.static('public'));
app.use(express.static(__dirname + '/public'));
// app.use("/images", express.static('public/images'));

/* Home route */
app.get('/', routes.home);
	
/* Home route */
app.get('/home', routes.home);

/* Single episode */
app.get('/episode/:episode', routes.episode );

/* Wild card - catching all not found pages */
app.get('/*', routes.notFound);


/*app.listen(80, function(){
	console.log('Listening on port 80');
});*/

app.listen(process.env.PORT || 3000);