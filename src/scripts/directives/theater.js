'use strict';

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
  });