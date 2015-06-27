'use scrict';
angular
  .module( 'myapp', ['ngRoute'] )
  .config(function ($routeProvider) {

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