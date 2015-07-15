'use strict';

angular.module('tanzmobil')
  .directive('backgroundColor', function (categoryColor) {
    var alpha = true;
    
    return function (scope, element, attrs) {
      element.css({
        'background-color': categoryColor.getColor(attrs.backgroundColor, alpha)
        });
    };
  });
