app.controller('FBCtrl', function($scope, $localstorage, $rootScope, $ionicModal, ngFB, $http){
    $scope.data = {};
    $scope.buttonClicked = false;
	$scope.fbLogin = function () {
        var userEmail = $localstorage.get('UBet.userEmail');

        if(typeof userEmail == 'undefined' || userEmail == ''){
            $scope.buttonClicked = true;
            ngFB.login({scope: 'email'}).then(function (response) {
                if (response.status === 'connected') {
                    console.log('Facebook login succeeded');
                    $scope.closeModal();
                    ngFB.api({
                    path: '/me',
                    params: {fields: 'id,email,name'}
                    }).then(function (user, uid, fbname, email) {
                            $scope.user = user;
                            $http.post('http://52.30.78.86:3000/api/users/', {uid: $scope.user.id, fbname: $scope.user.name, email: $scope.user.email}).then(function(res){
                                $scope.data = res.data;
                            });

                        var userEmail = user.email;
                        $localstorage.set('UBet.userEmail', userEmail);
                        $rootScope.userEmail = userEmail;
                        
                        window.plugins.toast.showLongCenter("Logging in as: " + user.name);
                       }, function (error) {
                            alert('Facebook error: ' + error.error_description);
                          });
                } else {
                    alert('Facebook login failed');
            }
        });

        }
        else{
            $scope.buttonClicked = false;
        }
};
        
})