'use strict';
angular.module('tanzmobil')
  .directive('interviewTeaser', function(CONFIG) {
    return {
      restrict: 'E',
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/interviewteaser.html'
    }
  })