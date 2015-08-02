'use strict';

angular.module('tanzmobil')
  .controller('InterviewsCtrl', function ($scope, $routeParams, $location, WpService) {
    var ctrl = this;
    $scope.posts = [];
    $scope.headline = ['All Interviews']

    ctrl.initPosts = function() {
      if (typeof $routeParams.tag !== 'undefined') {
        // post by tag
        WpService.postsByTag($routeParams.tag).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Interviews tagged:', $routeParams.tag];
      } else if (typeof $routeParams.category !== 'undefined') {
        // post by category
        WpService.postsByCategory($routeParams.category).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Interviews of Category:', $routeParams.category];
      } else if (typeof $routeParams.author !== 'undefined') {
        // post by category
        WpService.postsByAuthor($routeParams.author).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Interviews by:', $routeParams.author];
      } else if (typeof $routeParams.searchTerm !== 'undefined') {
        // posts by author
        WpService.postsByTerm($routeParams.searchTerm).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Search:', $routeParams.searchTerm];
      } else {
        // all posts
        WpService.allPosts().then(function(response) {
          $scope.posts = response;

          console.log($scope.posts);
        });
        $scope.headline = ['All Interviews'];
      }
    };

    ctrl.initPosts();
  });
