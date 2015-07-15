'use strict';

angular.module('tanzmobil')
  .filter('dateToISO', function () {
    return function(input) {
      input = new Date(input).toISOString();
      return input;
    };
  });