'use strict';

angular.module('tanzmobil')
  .controller('PageCtrl', function ($scope, WpService, $location, $sce) {
    WpService.page($location.url()).then(function(response) {
      $scope.page = $sce.trustAsHtml(response.content);
      console.log($scope.page);
    });
  });
