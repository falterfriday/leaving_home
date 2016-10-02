app.factory('userFactory', ['$http', function($http){

	function userFactory(){
		this.registerUser = function(newUser, callback){
			// console.log("uF - newUser = ", newUser);
			$http.post('/create_user', newUser).then(function(returnedData){
				// console.log("uF returnedData = ", returnedData.data);
				if(typeof(callback) == "function"){
					callback(returnedData.data);
				}
			});
		};
		this.loginUser = function(existingUser, callback){
			// console.log("uF - loginUser = ", existingUser);
			$http.post('/login', existingUser).then(function(returnedData){
				// console.log("uF - returnedData = ", returnedData.data);
				callback(returnedData.data);
			});
		};
		this.addNasaFavorite = function(favorite, callback){
			// console.log("uF - favorite = ", favorite);
			$http.post('/addNasaFavorite', favorite).then(function(returnedData){
				callback(returnedData);
			});
		};
		this.addRedditFavorite = function(favorite, callback){
			// console.log("uF - favorite = ", favorite);
			$http.post('/addRedditFavorite', favorite).then(function(returnedData){
				callback(returnedData);
			});
		};
		this.getUserFavorites = function(user, callback){
			// console.log('uF - getUserFavorites', user);
			$http.post('/getUserFavorites', user).then(function(returnedData){
				callback(returnedData);
			});
		};
		this.getFavUrls = function(user, callback){
			console.log("user = ", user);
			$http.post('/getFavUrls', user).then(function(returnedData){
				returnedData = returnedData.data[0]._favorites;
				console.log(returnedData);
				var arrFavs = [];
				for (var i = 0; i < returnedData.length ; i++){
					arrFavs.push(returnedData[i].url);
				}
				callback(arrFavs);
			});
		};
		this.deleteFavorite = function(favorite, callback){
			console.log('uF delete', favorite);
			$http.post('/deleteFavorite', favorite).then(function(returnedData){
				callback(returnedData);
			});
		};
	}
	return new userFactory();
}]);
