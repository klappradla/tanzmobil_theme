'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          //'dist/main.css' : 'styles/main.scss'
          'assets/styles/main.css' : 'src/styles/main.scss'
        },
      options: {
        loadPath: [
          'assets/vendor/bourbon/app/assets/stylesheets',
          'assets/vendor/neat/app/assets/stylesheets'
        ]
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
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'assets/styles/*.css'
      }
    },
    watch: {
      css: {
        files: 'src/styles/**/*.scss',
        tasks: ['sass', 'postcss']
      },
      js: {
        files: 'src/scripts/**/*.js',
        tasks: ['concat']
      }
    },
    copy: {
      main: {
        expand: true,
        src: ['*.php', 'style.css'],
        dest: 'theme/',
        filter: 'isFile'
      },
      assets: {
        expand: true,
        src: ['assets/**'],
        dest: 'theme/',
        filter: 'isFile'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('build',['sass', 'concat', 'postcss']);
  grunt.registerTask('default',['build', 'watch']);
  grunt.registerTask('deploy', ['build', 'copy']);
}
