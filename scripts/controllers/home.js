'use strict';

angular.module('tanzmobil')
  .controller('HomeCtrl', function ($scope, WpService) {

    // WpService.post('zwei-eulen').then(function(response) {
    //   console.log(response);
    // });
    WpService.postsByCategory('german').then(function(response) {
      console.log(response);
    });
  });