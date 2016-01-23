var app = angular.module('starter', ['ionic', 'ngCordova', 'ngOpenFB'])

.run(function($rootScope, $ionicPlatform, $ionicHistory, ngFB, $localstorage, UserService) {

ngFB.init({appId: 511438299029058});

  
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.Connection){
      if(navigator.connection.type == Connection.NONE){
        window.plugins.toast.showLongCenter(
        "No internet connection!"
        );
      }
    }
       var userEmail = $localstorage.get('UBet.userEmail');

        if(typeof userEmail == 'undefined' || userEmail == ''){
          window.plugins.toast.showLongBottom("Login if you want to bet!");
        }
        else{
          window.plugins.toast.showLongBottom("Already logged in!");
        }
  });
  $ionicPlatform.registerBackButtonAction(function(e){
    if ($rootScope.backButtonPressedOnceToExit) {
      ionic.Platform.exitApp();
    }

    else if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    }
    else {
      $rootScope.backButtonPressedOnceToExit = true;
      window.plugins.toast.showShortBottom(
        "Press back button again to exit",function(a){},function(b){}
      );
      setTimeout(function(){
        $rootScope.backButtonPressedOnceToExit = false;
      },2000);
    }
    e.preventDefault();
    return false;
  },101);
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.backButton.icon('ion-chevron-left')

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'NewsCtrl'
      }
    }
  })

  .state('tab.statistics', {
      url: '/statistics',
      views: {
        'tab-statistics': {
          templateUrl: 'templates/tab-statistics.html',
          controller: 'StatisticsCtrl'
        }
      }
    })

  .state('tab.statisticsinfo', {
    url: "/statistics/:id",
    views: {
        'tab-statistics': {
          templateUrl: "templates/side-views/statisticsinfo.html",
          controller: 'StatInfoCtrl'
      }
    }
  })

  .state('tab.matches', {
    url: '/matches',
    views: {
      'tab-matches': {
        templateUrl: 'templates/tab-matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })
      .state('tab.bet', {
        url: '/bet',
        views: {
          'tab-bet': {
            templateUrl: 'templates/tab-bet.html',
            controller: 'BetCtrl'
          }
        }
      })
      .state('tab.ticket', {
        url: '/bet/:email',
        views: {
          'tab-bet': {
            templateUrl: 'templates/side-views/ticket.html',
            controller: 'TicketCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/news');

});
