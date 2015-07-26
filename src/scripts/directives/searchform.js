'use strict';
angular.module('tanzmobil')
  .directive('searchForm', function(CONFIG, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/searchform.html',
      link: function(scope, element) {

        scope.submitSearch = function() {
          if (!scope.showSearchInput) {
            scope.showSearchInput = true;
            $timeout(function() {
              element.find('input')[0].focus(); 
            });
          } else if (!scope.searchInput) {
            scope.showSearchInput = false;
          } else {
            console.log(scope.searchInput);
            scope.search(scope.searchInput);
            $timeout(function() {
              element.find('input')[0].blur(); 
            });
          }
        };

        scope.searchInputBlur = function() {
          $timeout(function() {
            scope.showSearchInput = false;
          });
        };
      }
    }
  })