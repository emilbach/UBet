app.service('MatchesService', function($http){

	return{
		getMatches: function(){
			return $http.get("http://52.30.78.86:3000/api/matches").then(function(data){
					return data.data;
			});
		}
	}

});