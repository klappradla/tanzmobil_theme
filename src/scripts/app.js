'use strict';
angular
  .module('tanzmobil', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('CONFIG', {
    ROOT_URL: config.root,
    API_URL: config.api
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  })
  .config(function ($routeProvider, $locationProvider, CONFIG) {

    $locationProvider.html5Mode(true);

    var redirect = function(skip, url) {
      console.log("Redirecting to ", url);
      window.location.href = url
    };

    $routeProvider
      .when('/', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/news', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/page.html',
        controller: 'PageCtrl'
      })
      .when('/about', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/page.html',
        controller: 'PageCtrl'
      })
      .when('/imprint', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/page.html',
        controller: 'PageCtrl'
      })
      .when('/interviews', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/category/:category', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/tag/:tag', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/author/:author', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/search/:searchTerm', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/:post', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/post.html',
        controller: 'PostCtrl'
      })
      .when('/contact', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/contact.html'
      })
      .otherwise({
        redirectTo: redirect
      });
  })