'use strict';

angular.module('tanzmobil')
  .controller('HomeCtrl', function ($scope, WpService) {
    WpService.recentPosts(6).then(function (response) {
      console.log(response);
      $scope.posts = response;
    });

    WpService.page('news').then(function (response) {
      $scope.news = response;
    })
  });