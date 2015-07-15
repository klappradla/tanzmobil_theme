'use strict';

angular.module('tanzmobil')
  .controller('FooterCtrl', function ($scope, $routeParams, $sce, WpService) {
    $scope.currentDate = new Date();

    // WpService.post($routeParams.post).then(function(response) {
    //   $scope.post = response;
    //   $scope.postContent = $sce.trustAsHtml($scope.post.content);
    // });

    // function reading() {
    //   return true;
    // };

    // return {
    //   reading: reading
    // }
  });