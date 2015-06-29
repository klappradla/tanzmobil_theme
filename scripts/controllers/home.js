'use strict';

angular.module('tanzmobil')
  .controller('HomeCtrl', function ($scope, WpService) {

    // WpService.post('zwei-eulen').then(function(response) {
    //   console.log(response);
    // });
    WpService.recentPosts(2).then(function(response) {
      console.log(response);
      $scope.posts = response;
    });
  });