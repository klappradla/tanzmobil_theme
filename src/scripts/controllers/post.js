'use strict';

angular.module('tanzmobil')
  .controller('PostCtrl', function ($scope, $routeParams, $sce, WpService) {
    WpService.post($routeParams.post).then(function(response) {
      $scope.post = response;
      $scope.postContent = $sce.trustAsHtml($scope.post.content);
      $scope.postExcerpt = $sce.trustAsHtml($scope.post.excerpt);
    });

    // function reading() {
    //   return true;
    // };

    // return {
    //   reading: reading
    // }
  });
