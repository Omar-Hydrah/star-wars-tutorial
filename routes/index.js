/* Routes file. To specify which route goes to which request */

/* A JSON object containing all the details about the movies. */
var movies = require('../movies.json').movies;

exports.home = function(req, res){
	res.render('home', {
		title : 'Star wars movies',
		movies: movies
	});
};

/* A single movie */
exports.episode = function(req, res){

	if(req.params.episode == 0 || req.params.episode > movies.length ){
		// The episode number doesn't exist in our database.
		res.render('missing',{
			title: 'Page not found',
			movies: movies
		});

	}else{
		// The "episode" variable will be used to acces the indexes inside the movies array. 
		// The "episode" variable will be used in the "episode" view.
		var episode = req.params.episode - 1;
		res.render('episode', {
			title   : movies[episode].title, 
			episode : episode,
			movies  : movies 
		});	
	}


};

exports.about = function(req, res){
	res.send('About page.');
};

exports.notFound = function(req, res){
	res.render('missing', {
		title: 'Page not found'
	});
};




