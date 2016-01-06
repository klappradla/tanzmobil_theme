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

    function postsByTag(tagname) {
      return queryApi('posts?filter[tag]=' + tagname)
        .then(function(response) {
          return response.data;
        });
    }

    function postsByTerm(searchTerm) {
      return queryApi('posts?filter[s]=' + searchTerm)
        .then(function(response) {
          return response.data;
        });
    }

    function postsByAuthor(author_name) {
      return queryApi('posts?filter[author_name]=' + author_name)
        .then(function(response) {
          return response.data;
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
      postsByCategory: postsByCategory,
      postsByTag: postsByTag,
      postsByTerm: postsByTerm,
      postsByAuthor: postsByAuthor
    };

  });
