'use strict';

angular.module('tanzmobil')
  .controller('MainCtrl', function ($scope, CONFIG) {
    $scope.rootUrl = CONFIG.ROOT_URL;
  });