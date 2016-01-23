app.controller('NewsCtrl', function($scope, $timeout, $ionicLoading, NewsService) {

    $scope.newsarr = [];
    var newstype = [];
    var newsdesc = [];

    var i=0;  
    var j=0;

    $scope.loadData = function () {
        
        NewsService.getNews().then(function(data){
                for (var i = 0; i < data.length; i++) {
                    newstype[i] = data[i].type;
                    newsdesc[i] = data[i].description; 
                }; 
        });
        $timeout(function () {
            $scope.noMoreItemsAvailable = false;
                    var k = i;
                    // load more data
                    for(;j<k+9;j++, i++){
                        var temp = {
                            id: i+1,
                            newstype: newstype[Math.floor(Math.random() * newstype.length)],
                            newsdesc: newsdesc[Math.floor(Math.random() * newsdesc.length)]
                        };
                        if (typeof temp.newstype == 'undefined') {
                            $scope.noMoreItemsAvailable = true;
                            break;
                        }
                        else{
                            $scope.newsarr.push(temp);
                        }
                        
                    }
                    $ionicLoading.hide();
                    $scope.$broadcast('scroll.refreshComplete');
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                },10*100);
        
    }
});
