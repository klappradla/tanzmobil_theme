'use strict';

angular.module('tanzmobil')
  .service('WpService', function ($http, CONFIG) {
  // AngularJS will instantiate a singleton by calling "new" on this function

    var apiUrl = CONFIG.API_URL;

    function allPosts() {
      return queryApi('posts').then(function(response) {
        return response.data;
      });
    }

    function recentPosts(count) {
      count = count || 4;
      return queryApi('posts?filter[posts_per_page]=' + count + '&filter[order]=DESC')
        .then(function(response) {
          console.log(response);
          return response.data;
        });
    }

    // get wp page by slug
    function page(slug) {
      return queryApi('pages?filter[name]=' + slug)
        .then(function(response) {
          return response.data[0];
        });
    }

    function post(slug) {
      return queryApi('posts?filter[name]=' + slug)
        .then(function(response) {
          return response.data[0];
        });
    }

    function postsByCategory(slug) {
      return queryApi('posts?filter[category_name]=' + slug)
        .then(function(response) {
          return response.data;
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
