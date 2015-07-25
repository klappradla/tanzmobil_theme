'use strict';

angular.module('tanzmobil')
  .controller('MainCtrl', function ($scope, CONFIG, $location) {
    $scope.rootUrl = CONFIG.ROOT_URL;

    $scope.search = function(term) {
      console.log('call search');
      $location.path('/interviews/search/' + term);
    }
  });