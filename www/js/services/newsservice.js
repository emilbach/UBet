app.service('NewsService', function($http){

	return{
		getNews: function(){
			return $http.get("http://52.30.78.86:3000/api/news").then(function(data){
					return data.data;
			});
		}
	}

});