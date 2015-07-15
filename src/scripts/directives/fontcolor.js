'use strict';

angular.module('tanzmobil')
  .directive('fontColor', function (categoryColor) {
    return function (scope, element, attrs) {
      element.css({
        'color': categoryColor.getColor(attrs.fontColor, true)
        });
    };
  });
