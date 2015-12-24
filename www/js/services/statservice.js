app.service('StatService', function($http) {
	return {
		getAllStats: function(){
			return $http.get("http://52.30.78.86:3000/api/stats").then(function(data){
				return data.data;
			});
		},
		getStatID: function(id){
			return $http.get("http://52.30.78.86:3000/api/stats").then(function(data){
						for(i=0;i<data.data.length;i++){
							if(data.data[i].id == id){
								return data.data[i];
							}
						}	
					});
			
			return null;
		}
	}
});