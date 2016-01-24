app.service('UserService', function($http){

	return {
		getUser: function(){
			return $http.get('http://52.30.78.86:3000/api/users').then(function(data){
				return data.data;
			})
		},
		saveUser: function(obj){
			return $http.post('http://52.30.78.86:3000/api/users', obj).then(function(res){
				return res.data;
			})
		}
	}
});