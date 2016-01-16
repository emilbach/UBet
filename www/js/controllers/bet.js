app.controller('BetCtrl', function($scope, $ionicModal, ngFB, $http, TicketService, $localstorage, UserService) {
  
  
  $ionicModal.fromTemplateUrl('templates/side-views/login.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(){
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
  $scope.data = {};
  $scope.buttonClicked = false;
  $scope.submitBet = function(id, type, email){

      var userEmail = $localstorage.get('UBet.userEmail');

        if(typeof userEmail == 'undefined' || userEmail == ''){
          $scope.buttonClicked = false;
        }
        else{
            $scope.buttonClicked = true;
            UserService.getUser().then(function(data){
                $scope.data.email = data[0].email;
            }); 
            $http.post('http://52.30.78.86:3000/api/bet', {id: $scope.data.id, type: $scope.data.type, email: $scope.data.email}).then(function(res){
                    $scope.data = res.data;
                });
        }
      
  };

  var userEmail = $localstorage.get('UBet.userEmail');

        if(typeof userEmail == 'undefined' || userEmail == ''){
            $scope.tinfo = [];
        }
        else{
            TicketService.getAllTickets().then(function(data){
                $scope.tinfo = data[0];
            });
        }
});