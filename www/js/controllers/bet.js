app.controller('BetCtrl', function($scope, $ionicModal, ngFB, TicketService, $localstorage, UserService, $ionicLoading) {
  
  
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

  $scope.submitBet = function(){

      var userEmail = $localstorage.get('UBet.userEmail');

        if(typeof userEmail == 'undefined' || userEmail == ''){
          $scope.buttonClicked = false;
        }
        else{
            $scope.buttonClicked = true;
            UserService.getUser().then(function(data){
                $scope.data.email = data[0].email;
            }); 
            
            obj = {
              id: $scope.data.id,
              type: $scope.data.type,
              email: $scope.data.email
            };
            TicketService.enterBet(obj).then(function(data){
                    $scope.data = data;
                });

        }
      
  };
  $scope.loadTicket = function(){
        
            var userEmail = $localstorage.get('UBet.userEmail');
            $scope.isEmpty = false;
            var len = 0;
             if(typeof userEmail == 'undefined' || userEmail == ''){
                $scope.isEmpty = true;
             }
             else if(typeof userEmail !== 'undefined' || userEmail !== ''){
                     TicketService.getAllTickets().then(function(data){
                        $scope.tinfo = data;
                        len = $scope.tinfo.length;
                        if(len == 0){
                          $scope.isEmpty = true;
                        }
                        else{
                          $scope.isEmpty = false;
                        }
                     });
             }
             else{
                $scope.isEmpty = true;
             }
              $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete')
  }
});