'use strict';

angular.module('tanzmobil')
  .controller('PageCtrl', function ($scope, WpService, $location) {
    WpService.page($location.url()).then(function(response) {
      $scope.page = response;
    });
  });
