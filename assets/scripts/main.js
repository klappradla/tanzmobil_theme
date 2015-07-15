'use strict';
angular
  .module('tanzmobil', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('CONFIG', {
    ROOT_URL: config.root,
    API_URL: config.api
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  })
  .config(function ($routeProvider, $locationProvider, CONFIG) {

    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/news', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/page.html',
        controller: 'PageCtrl'
      })
      .when('/about', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/page.html',
        controller: 'PageCtrl'
      })
      .when('/interviews', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/:post', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/post.html',
        controller: 'PostCtrl'
      })
      .when('/contact', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/contact.html'
      });
  });'use strict';

angular.module('tanzmobil')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
;'use strict';

angular.module('tanzmobil')
  .controller('HomeCtrl', function ($scope, WpService) {

    // WpService.post('zwei-eulen').then(function(response) {
    //   console.log(response);
    // });
    WpService.recentPosts(2).then(function(response) {
      console.log(response);
      $scope.posts = response;
    });
  });;'use strict';

angular.module('tanzmobil')
  .controller('InterviewsCtrl', function ($scope, WpService) {

    WpService.allPosts().then(function(response) {
      $scope.posts = response;
      console.log($scope.posts);
    });
  });
;'use strict';

angular.module('tanzmobil')
  .controller('NavCtrl', function ($scope, $location) {
    
    function isActive(view) {
      return view === $location.path();
    };

    return {
      isActive: isActive
    };    
  });
;'use strict';

angular.module('tanzmobil')
  .controller('PageCtrl', function ($scope, WpService, $location) {
    WpService.page($location.url()).then(function(response) {
      $scope.page = response;
    });
  });
;'use strict';

angular.module('tanzmobil')
  .controller('PostCtrl', function ($scope, $routeParams, $sce, WpService) {
    WpService.post($routeParams.post).then(function(response) {
      $scope.post = response;
      $scope.postContent = $sce.trustAsHtml($scope.post.content);
    });

    // function reading() {
    //   return true;
    // };

    // return {
    //   reading: reading
    // }
  });
;'use strict';
angular.module('tanzmobil')
  .controller('TeaserCtrl', function() {
  });;'use strict';

angular.module('tanzmobil')
  .directive('backgroundColor', function (categoryColor) {
    var alpha = true;
    
    return function (scope, element, attrs) {
      element.css({
        'background-color': categoryColor.getColor(attrs.backgroundColor, alpha)
        });
    };
  });
;'use strict';

angular.module('tanzmobil')
  .directive('backgroundImage', function () {
    return function (scope, element, attrs) {
      element.css({
        'background-image': 'url(' + attrs.backgroundImage + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center center'
        });
    };
  });;'use strict';

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
  });;'use strict';

angular.module('tanzmobil')
  .directive('fontColor', function (categoryColor) {
    return function (scope, element, attrs) {
      element.css({
        'color': categoryColor.getColor(attrs.fontColor, true)
        });
    };
  });
;'use strict';
angular.module('tanzmobil')
  .directive('interviewTeaser', function(CONFIG) {
    return {
      restrict: 'E',
      templateUrl: CONFIG.ROOT_URL + 'assets/views/interviewteaser.html',
      controller: 'TeaserCtrl',
      controllerAs: 'teaser'
    }
  });'use strict';

angular.module('tanzmobil')
  .directive('theater', function() {
    var theater;

    function init() {
      theater = new TheaterJS({
        erase: false,
        autoplay: true,
        minspeed: 10,
        maxspeed: 200
      });
    }

    function play() {
      // actors
      theater
        .describe('question', { speed: .8, accuracy: .7, invincibility: 5 }, '#question')
        .describe('answer', { speed: .9, accuracy: .8, invincibility: 6 }, '#answer')

      // scenario
      theater
        .write(200)
        .write('question:You want to stay updated?')
        .write(200)
        .write('answer:Subscribe to our newsletter: newsletter@tanzmobil.eu !')
        .write(200)
        .write('question:You want to be part of the tanzmobil project', 100)
        .write('question:you want to work with us', 100)
        .write('question:or you have other questions?', 100)
        .write(200)
        .write('answer:Please don’t hesitate to contact us: info@tanzmobil.eu !')
        .write(200)
        .write('question:You want to support us and become a member of the association?', 100)
        .write(200)
        .write('answer:We offer an annual membership for 50€ including all the interviews send per post!')
        .write(400)
        .write(-46)

        // loop scenario
        .write(function () { theater.play(true); });
    }

    return function(scope, element, attrs) {
       scope.$on('$viewContentLoaded', function() {
        init();
        play();
      });
    }
  });;'use strict';

angular.module('tanzmobil')
  .filter('dateToISO', function () {
    return function(input) {
      input = new Date(input).toISOString();
      return input;
    };
  });;'use strict';

angular.module('tanzmobil')
  .service('categoryColor', function () {
    function getColor(category, alpha) {
      alpha = alpha || false;
      switch(category) {
        case 'german':
          if (alpha) {
            //return 'rgba(237,85,101,0.5)';
            return 'rgba(252,110,81,0.5)';
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
;'use strict';

angular.module('tanzmobil')
  .service('WpService', function ($http, CONFIG) {
  // AngularJS will instantiate a singleton by calling "new" on this function

    var apiUrl = CONFIG.API_URL;

    function allPosts() {
      return queryApi('get_posts').then(function(response) {
        return response.data.posts;
      });
    }

    function recentPosts(count) {
      count = count || 4;
      return queryApi('get_recent_posts/?count=' + count)
        .then(function(response) {
          return response.data.posts;
        });
    }

    // get wp page by slug
    function page(slug) {
      return queryApi('get_page/?slug=' + slug)
        .then(function(response) {
          return response.data.page;
        });
    }

    function post(slug) {
      return queryApi('get_post/?slug=' + slug)
        .then(function(response) {
          return response.data.post;
        });
    }

    function postsByCategory(slug) {
      return queryApi('get_category_posts/?slug=' + slug)
        .then(function(response) {
          return response.data.posts;
        });      
    }

    function queryApi(url) {
      return $http
        .get(apiUrl + url, { cache: true })
        .then(function(response) {
          return response;
        });
    }

    return {
      allPosts: allPosts,
      recentPosts: recentPosts,
      page: page,
      post: post,
      postsByCategory: postsByCategory
    };

  });
//# sourceMappingURL=main.js.map