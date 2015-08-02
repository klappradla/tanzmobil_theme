'use strict';
angular.module('tanzmobil')
  .directive('interviewTeaser', function(CONFIG) {

    function teaserImage(post) {
      if (post.thumbnail_images) {
        return post.thumbnail_images.full.url
      }
      return CONFIG.ROOT_URL + 'assets/images/placeholder.jpg'
    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/interviewteaser.html',
      link: function(scope, element) {
        scope.teaserImage = teaserImage(scope.post);
      }
    }
  })