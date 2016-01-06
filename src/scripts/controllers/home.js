'use strict';

angular.module('tanzmobil')
  .controller('HomeCtrl', function ($scope, WpService, $sce) {
    // WpService.recentPosts(6).then(function (response) {
    //   console.log(response);
    //   $scope.posts = response;
    // });
    //
    // WpService.page('news').then(function (response) {
    //   $scope.news = $sce.trustAsHtml(response.content);
    // })
    WpService.postsByTerm('zwei eulen').then(function (response) {
      console.log(response);
    });
  });
