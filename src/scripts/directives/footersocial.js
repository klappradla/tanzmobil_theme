'use strict';
angular.module('tanzmobil')
  .directive('footerSocial', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/footersocial.html'
    }
  })