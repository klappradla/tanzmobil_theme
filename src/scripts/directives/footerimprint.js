'use strict';
angular.module('tanzmobil')
  .directive('footerImprint', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/footerimprint.html'
    }
  })