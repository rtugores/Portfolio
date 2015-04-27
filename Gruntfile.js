'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';',
        },
        files: {
          'src/js/init_app.js': ['src/js/skel.min.js','src/js/init.js','src/js/contact.js'],
        },
      },
    },
    copy: {
      html: {
        src: 'src/index.html',
        dest: 'build/index.html',
      },
      script: {
        src: 'src/app.js',
        dest: 'build/app.js',
      }
    },
    sass: {
      build: { 
        options: {
          style: 'compressed',
          noCache: true,
        },
        files: { 
          'build/css/style.css': 'src/sass/style.scss', 
          'build/css/style-large.css': 'src/sass/style-large.scss', 
          'build/css/style-medium.css': 'src/sass/style-medium.scss', 
          'build/css/style-small.css': 'src/sass/style-small.scss', 
          'build/css/style-xsmall.css': 'src/sass/style-xsmall.scss', 
        }
      }
    },
    uglify: {
      options: {
        screwIE8: true,           //default as false, true if you don't want ie6-8 integration 
      },
      js: {
        files: {
          'build/js/app.min.js': ['src/js/init_app.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat:js','uglify:js'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      css: {
        files: 'src/sass/*.scss',
        tasks: ['sass'],
      },
    },
    'gh-pages': {
        options: {
            base: 'build'
        },
        src: ['**']
    }, 
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Custom tasks
  grunt.registerTask('default');
};