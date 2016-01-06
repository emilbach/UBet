app.service('TicketService', function($http){
 	
	return {
		getTicket: function(){
			return $http.get('http://52.30.78.86:3000/api/bet').then(function(data){
				return data.data;
			});
		}
	}
});