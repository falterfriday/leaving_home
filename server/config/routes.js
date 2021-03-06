console.log('routes.js connected');

var users = require('../controllers/users.js');

module.exports = function(app){
	app.post('/create_user', users.createUser);
	app.post('/login', users.loginUser);
	app.post('/getFavUrls', users.getFavUrls);
	app.post('/addNasaFavorite', users.addNasaFavorite);
	app.post('/addRedditFavorite', users.addRedditFavorite);
	app.post('/getUserInfo', users.getUserInfo);
	app.post('/getUserFavorites', users.getUserFavorites);
	app.post('/deleteFavorite', users.deleteFavorite);
};
