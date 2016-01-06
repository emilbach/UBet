app.controller('BetCtrl', function($scope, $ionicModal, ngFB) {
  
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

  $scope.fbLogin = function () {
    ngFB.login({scope: 'email'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeModal();
                ngFB.api({
        path: '/me',
        params: {fields: 'id,email,name'}
    }).then(
        function (user) {
            $scope.user = user;
            console.log(user);
        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });
            } else {
                alert('Facebook login failed');
            }
        });
};
});