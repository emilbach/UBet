app.service('TicketService', function($http){
	return {
		getAllTickets: function(){
			return $http.get("http://52.30.78.86:3000/api/bet").then(function(data){
				return data.data;
			});
		},
		getTicketEmail: function(email){
			return $http.get('http://52.30.78.86:3000/api/bet').then(function(data){
						for(i=0;i<data.data.length;i++){
							if(data.data[i].email == email){
								return data.data;
							}
						}	
					});
		return null;
		}
	}
});