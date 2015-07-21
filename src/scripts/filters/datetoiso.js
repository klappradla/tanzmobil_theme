'use strict';

angular.module('tanzmobil')
  .filter('dateToISO', function () {
    return function(input) {
      console.log(input);
      input = new Date(input).toISOString();
      return input;
    };
  });