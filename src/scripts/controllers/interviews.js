'use strict';

angular.module('tanzmobil')
  .controller('InterviewsCtrl', function ($scope, $routeParams, WpService) {
    console.log($routeParams);

    $scope.posts = [];
    $scope.headline = ['All Interviews', '']

    $scope.init = function() {
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
      } else if (typeof $routeParams.searchTerm !== 'undefined') {
        // posts by fulltext search
      } else {
        // all posts
        WpService.allPosts().then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['All Interviews'];
      }
    };

    $scope.init();
  });
