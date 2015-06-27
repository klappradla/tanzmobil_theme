'use strict';

angular.module('tanzmobil')
  .controller('NavCtrl', function ($scope, $location) {
    
    function isActive(view) {
      return view === $location.path();
    };

    return {
      isActive: isActive
    };    
  });
