'use strict';

angular.module('tanzmobil')
  .filter('htmlToPlain', function () {
    return function(text) {
      return angular.element(text).text();
    };
  });