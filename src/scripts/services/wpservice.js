'use strict';

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
    };

  });