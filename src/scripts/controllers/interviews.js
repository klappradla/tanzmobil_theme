'use strict';

angular.module('tanzmobil')
  .controller('InterviewsCtrl', function ($scope, WpService) {

    WpService.allPosts().then(function(response) {
      $scope.posts = response;
      console.log($scope.posts);
    });
  });
