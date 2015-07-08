'use strict';

angular.module('tanzmobil')
  .service('categoryColor', function () {
    function getColor(category, alpha) {
      alpha = alpha || false;
      switch(category) {
        case 'german':
          if (alpha) {
            return 'rgba(237,85,101,0.5)';  
          }
          return '#ED5565';
        case 'english':
          if (alpha) {
            return 'rgba(252,110,81,0.5)';
          }
          return '#FC6E51';
        case 'french':
          if (alpha) {
            return 'rgba(93,156,236,0.5)';
          }
          return '#5D9CEC';
        default:
          if (alpha) {
            return 'rgba(204,209,217,0.5)';
          }
          return '#CCD1D9';
      }
    }

    return {
      getColor: getColor
    };
  });
