app.service('UserService', function($http){

	return {
		getUser: function(){
			return $http.get('http://52.30.78.86:3000/api/users').then(function(data){
				return data.data;
			})
		}
	}
});