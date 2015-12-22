app.controller('NewsCtrl', function ($scope, $timeout, $ionicLoading) {

    $scope.data = {};

    $scope.newsarr = [];

    var newstype = ['Recent','Latest','Older'];
    var time = ['11:00h','12:00h','13:00h','14:30h', '9:45h', '12:15h'];
    var newsdesc = [
        "Olivier Giroud is already focused on breaking Arsenal's last-16 hoodoo after his hat-trick took them through at Olympiacos, whose fans were thanked by the returning Joel Campbell.",
        "Gary Neville watched Valencia exit the competition against Lyon and after speaking to the new coach, Graham Hunter identifies five changes the Englishman will want to make.",
        "John Terry and Olivier Giroud reflect on qualification and Cristiano Ronaldo discusses breaking records as our expert panel review the weeks UEFA Champions League action.",
        "Cristiano Ronaldo's record 11 group-stage strikes leave him with an eight-goal lead over Lionel Messi at the head of the list of all-time top scorers."
    ];

    var i=0;

    for(i=0;i<1;i++){
        var temp = {
            id: i+1,
            newstype: newstype[Math.floor(Math.random() * newstype.length)],
            time: time[Math.floor(Math.random() * time.length)],
            newsdesc: newsdesc[Math.floor(Math.random() * newsdesc.length)]
        };

        $scope.newsarr.push(temp);

    }

    var j=0;

    $scope.loadData = function () {

        $timeout(function () {

            var k = i;

            // load more data
            for(;j<k+4;j++, i++){
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

        },10*100);

    }


});