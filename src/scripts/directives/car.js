'use strict';

angular.module('tanzmobil')
  .directive('car', function() {
    var svgElement;
    var wheels;

    function init(element) {
      svgElement = new Snap(element);
      wheels = {};
      wheels.front = svgElement.select('#front');
      wheels.back = svgElement.select('#back');
    }

    function getCenter(element) {
      var bBox = element.getBBox();
      return (bBox.cx + ', ' + bBox.cy);
    }

    function turnWheel(wheel) {
      var center = getCenter(wheel);
      wheel.stop()
        .animate({
          transform: 'r-360,' + center
        },
        750,
        function() {
          wheel.attr({transform: 'r0,' + center});
          turnWheel(wheel);
        }
      );
    }

    function animate() {
      turnWheel(wheels.front);
      turnWheel(wheels.back);
    }

    return function(scope, element, attrs) {
      angular.element(window).load(function() {
        init(element[0]);
        animate();
      });
    }
  });