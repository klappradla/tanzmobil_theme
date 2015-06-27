'use strict';
angular
  .module('tanzmobil', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: aeJS.views + 'home.html',
        controller: 'mycontroller'
      })
      .when('/about', {
        templateUrl: aeJS.views + 'about.html',
        controller: 'mycontroller'
      });
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/home.html',
    //     controller: 'HomeCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    //   .when('/interviews', {
    //     templateUrl: 'views/interviews.html',
    //     controller: 'InterviewsCtrl'
    //   })
    //   .when('/interviews/:post', {
    //     templateUrl: 'views/post.html',
    //     controller: 'PostCtrl'
    //   })
    //   .when('/contact', {
    //     templateUrl: 'views/page.html',
    //     controller: 'PageCtrl'
    //   })
    //   .when('/partners', {
    //     templateUrl: 'views/page.html',
    //     controller: 'PageCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  })
  .filter('unsafe', function($sce) { return $sce.trustAsHtml; })
  .run( ['$rootScope', function($rootScope) {

    // Variables defined by wp_localize_script
    $rootScope.api = aeJS.api;

  }])
  .controller( 'mycontroller', function( $scope, $http, $sce) {

    // Load posts from the WordPress API
    $http({
      method: 'GET',
      url: $scope.api + '/get_posts',
      params: {
      },
    }).
    success( function( data, status, headers, config ) {
      console.log( $scope.api );
      console.log( data );
      $scope.posts = data.posts;
    }).
    error(function(data, status, headers, config) {});

  });
//# sourceMappingURL=main.js.map