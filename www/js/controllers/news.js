app.controller('NewsCtrl', function($scope, $timeout, $ionicLoading, NewsService) {

    $scope.newsarr = [];
    var newstype = [];
    var time = [];
    var newsdesc = [];

    var i=0;  
    var j=0;

    $scope.loadData = function () {
        NewsService.getNews().then(function(data){
                for (var i = 0; i < data.length; i++) {
                    newstype[i] = data[i].type;
                    time[i] = data[i].time;
                    newsdesc[i] = data[i].description; 
                }; 
        });
        $timeout(function () {
                    var k = i;
                    // load more data
                    for(;j<k+7;j++, i++){
                        var temp = {
                            id: i+1,
                            newstype: newstype[Math.floor(Math.random() * newstype.length)],
                            time: time[Math.floor(Math.random() * time.length)],
                            newsdesc: newsdesc[Math.floor(Math.random() * newsdesc.length)]
                        };
                        $scope.newsarr.push(temp);
                    }
                    $ionicLoading.hide();
                    $scope.$broadcast('scroll.refreshComplete');
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    if(typeof $scope.newsarr[0].newstype === 'undefined'){
                            window.plugins.toast.showLongCenter("Server is down, try again later!");
                        }
                },10*100);
        
    }
});

