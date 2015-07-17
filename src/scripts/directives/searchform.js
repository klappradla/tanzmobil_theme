'use strict';
angular.module('tanzmobil')
  .directive('searchForm', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/searchform.html',
      link: function(scope, element) {
        console.log(scope);
        scope.submitSearch = function() {
          console.log(scope.searchInput);
          scope.search(scope.searchInput);
        };
      }
    }
  })