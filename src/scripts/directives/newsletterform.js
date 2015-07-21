'use strict';
angular.module('tanzmobil')
  .directive('newsletterForm', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/newsletterform.html'
    }
  })