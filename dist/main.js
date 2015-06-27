'use scrict';
var myapp = angular.module( 'myapp', ['ngRoute'] );


myapp.config(function ($routeProvider) {

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
});

myapp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

// Set the configuration
myapp.run( ['$rootScope', function($rootScope) {

  // Variables defined by wp_localize_script
  $rootScope.api = aeJS.api;

}]);

// Add a controller
myapp.controller( 'mycontroller', function( $scope, $http, $sce) {

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