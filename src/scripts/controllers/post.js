'use strict';

angular.module('tanzmobil')
  .controller('PostCtrl', function ($scope, $routeParams, $sce, WpService) {
    WpService.post($routeParams.post).then(function(response) {
      $scope.post = response;
      $scope.postContent = $sce.trustAsHtml($scope.post.content);
    });

    // function reading() {
    //   return true;
    // };

    // return {
    //   reading: reading
    // }
  });