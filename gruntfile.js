'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          //'dist/main.css' : 'styles/main.scss'
          'assets/styles/main.css' : 'src/styles/main.scss'
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';',
        sourceMap: true
      },
      dist: {
        // the files to concatenate
        src: ['src/scripts/**/*.js'],
        // the location of the resulting JS file
        //dest: 'dist/main.js'
        dest: 'assets/scripts/main.js'
      }
    },
    watch: {
      css: {
        files: 'styles/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: 'scripts/**/*.js',
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build',['sass', 'concat']);
  grunt.registerTask('default',['build', 'watch']);
}