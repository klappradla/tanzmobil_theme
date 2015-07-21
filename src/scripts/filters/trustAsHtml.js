'use strict';

angular.module('tanzmobil')
  .filter('trustAsHtml', function ($sce) {
    return function(input) {
      console.log(input);
      input = $sce.trustAsHtml(input);
      return input;
    };
  });