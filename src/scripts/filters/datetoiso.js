'use strict';

angular.module('tanzmobil')
  .filter('dateToISO', function () {

    function parseDate(s) {
      var b = s.split('-');
      return b[2] + '.' + b[1] + '.' + b[0]
    }

    return function(input) {
      input = input.substr(0, input.indexOf(' '))
      return parseDate(input);;
    };
  });