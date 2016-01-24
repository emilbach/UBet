app.controller('FBCtrl', function ($scope, $localstorage, $rootScope, $ionicModal, ngFB, UserService){
    $scope.data = {};
	$scope.fbLogin = function () {
        var userEmail = $localstorage.get('UBet.userEmail');
        if(typeof userEmail == 'undefined' || userEmail == ''){
            ngFB.login({scope: 'email'}).then(function (response){
                if(response.status === 'connected'){
                    $scope.closeModal();
                    ngFB.api({
                    path: '/me',
                    params: {fields: 'id,email,name'}
                    }).then(function (user, userObj){
                            $scope.user = user;
                            userObj = {
                                uid: $scope.user.id, 
                                fbname: $scope.user.name, 
                                email: $scope.user.email
                            };
                            UserService.saveUser(userObj).then(function(data){
                                $scope.data = data;
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
            $scope.buttonlogin = true;
        }
        else{
            $scope.buttonlogin = false;
        }
    };
    $scope.logout = function(){
        var userEmail = $localstorage.get('UBet.userEmail');
        if(typeof userEmail == 'undefined' || userEmail == ''){
            $scope.buttonlogout = false;
            $scope.buttonlogin = true;
        } else{
            $scope.buttonlogout = true;
            $localstorage.set('UBet.userEmail', '');
            $rootScope.userEmail = null;
            window.plugins.toast.showLongCenter("Logging out!");
            $scope.closeModal();
            $scope.buttonlogin = false;
        }
        $scope.buttonlogout = false;
    };
        
});