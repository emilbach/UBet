var app = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
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
        alert('Connect to internet and restart the app!');
      }
    }
  });
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
          templateUrl: "templates/statisticsinfo.html",
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
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/news');

});
