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

    var redirect = function(skip, url) {
      console.log("Redirecting to ", url);
      window.location.href = url
    };

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
      .when('/imprint', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/page.html',
        controller: 'PageCtrl'
      })
      .when('/interviews', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/category/:category', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/tag/:tag', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/author/:author', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/search/:searchTerm', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/interviews.html',
        controller: 'InterviewsCtrl'
      })
      .when('/interviews/:post', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/post.html',
        controller: 'PostCtrl'
      })
      .when('/contact', {
        templateUrl: CONFIG.ROOT_URL + 'assets/views/contact.html'
      })
      .otherwise({
        redirectTo: redirect
      });
  });'use strict';

angular.module('tanzmobil')
  .controller('FooterCtrl', function ($scope, $routeParams, $sce, WpService) {
    $scope.currentDate = new Date();

    // WpService.post($routeParams.post).then(function(response) {
    //   $scope.post = response;
    //   $scope.postContent = $sce.trustAsHtml($scope.post.content);
    // });

    // function reading() {
    //   return true;
    // };

    // return {
    //   reading: reading
    // }
  });;'use strict';

angular.module('tanzmobil')
  .controller('HomeCtrl', function ($scope, WpService) {
    WpService.recentPosts(2).then(function (response) {
      console.log(response);
      $scope.posts = response;
    });

    WpService.page('news').then(function (response) {
      $scope.news = response;
    })
  });;'use strict';

angular.module('tanzmobil')
  .controller('InterviewsCtrl', function ($scope, $routeParams, $location, WpService) {
    var ctrl = this;
    $scope.posts = [];
    $scope.headline = ['All Interviews']

    ctrl.initPosts = function() {
      if (typeof $routeParams.tag !== 'undefined') {
        // post by tag
        WpService.postsByTag($routeParams.tag).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Interviews tagged:', $routeParams.tag];
      } else if (typeof $routeParams.category !== 'undefined') {
        // post by category
        WpService.postsByCategory($routeParams.category).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Interviews of Category:', $routeParams.author];
      } else if (typeof $routeParams.author !== 'undefined') {
        // post by category
        WpService.postsByAuthor($routeParams.author).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Interviews by:', $routeParams.author];
      } else if (typeof $routeParams.searchTerm !== 'undefined') {
        // posts by author
        WpService.postsByTerm($routeParams.searchTerm).then(function(response) {
          $scope.posts = response;
        });
        $scope.headline = ['Search:', $routeParams.searchTerm];
      } else {
        // all posts
        WpService.allPosts().then(function(response) {
          $scope.posts = response;

          console.log($scope.posts);
        });
        $scope.headline = ['All Interviews'];
      }
    };

    $scope.search = function(term) {
      console.log("call search");
      $location.path('/interviews/search/' + term);
    }

    ctrl.initPosts();
  });
;'use strict';

angular.module('tanzmobil')
  .controller('MainCtrl', function ($scope, CONFIG) {
    $scope.rootUrl = CONFIG.ROOT_URL;
  });;'use strict';

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
      $scope.postDate = new Date($scope.post.date).toISOString();
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
  .directive('footerImprint', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/footerimprint.html'
    }
  });'use strict';
angular.module('tanzmobil')
  .directive('footerSocial', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/footersocial.html'
    }
  });'use strict';
angular.module('tanzmobil')
  .directive('interviewTeaser', function(CONFIG) {
    return {
      restrict: 'E',
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/interviewteaser.html'
    }
  });'use strict';
angular.module('tanzmobil')
  .directive('newsletterForm', function(CONFIG) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: CONFIG.ROOT_URL + 'assets/views/components/newsletterform.html'
    }
  });'use strict';
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
          }
        };

        scope.searchInputBlur = function() {
          $timeout(function() {
            scope.showSearchInput = false;
          });
        };
      }
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
      console.log(input);
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

    function postsByTag(slug) {
      return queryApi('get_tag_posts/?tag_slug=' + slug)
        .then(function(response) {
          return response.data.posts;
        });      
    }

    function postsByTerm(searchTerm) {
      return queryApi('get_search_results/?search=' + searchTerm)
        .then(function(response) {
          var posts = response.data.posts;

          console.log(response.data);
          return posts.filter(filterForPostType);
        });
    }

    function postsByAuthor(slug) {      
      return queryApi('get_author_posts/?slug=' + slug)
        .then(function(response) {
          var posts = response.data.posts;

          console.log(response.data);
          return posts.filter(filterForPostType);
        });
    }

    function queryApi(url) {
      return $http
        .get(apiUrl + url, { cache: true })
        .then(function(response) {
          return response;
        });
    }

    function filterForPostType(post) {
      return post['type'] === 'post';
    }

    return {
      allPosts: allPosts,
      recentPosts: recentPosts,
      page: page,
      post: post,
      postsByCategory: postsByCategory,
      postsByTag: postsByTag,
      postsByTerm: postsByTerm,
      postsByAuthor: postsByAuthor
    };

  });
//# sourceMappingURL=main.js.map