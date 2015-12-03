/**
 * Created by jianwu.zhang on 2015/11/25.
 */
// The wrapper function of grunt
module.exports = function(grunt) {

    // Project and Task Configuration
    grunt.initConfig({
        // if you want to use package.json
        pkg: grunt.file.readJSON("package.json"),

        // Config jshint for Project
        // use [grunt-contrib-jshint]
        jshint: {
            all: ['src/main/hybrid/*.js']
        },

        // concat multiple files to one.
        // use [grunt-contrib-concat]
        concat: {
            js: {
                options: {
                    separator: ";"
                },
                src: ["lib/js/*.js"],
                dest: ["dist/final.js"]
            },

            css: {
                src: ["lib/css/*.css"],
                dest: ["dist/final.css"]
            }
        },

        // compress js files
        // use [grunt-contrib-uglify]
        uglify: {
            js: {
                files : {
                    'dist/final.js' : 'dist/final.min.js'
                }
            }
        },

        // compress css files
        // use [grunt-css]
        cssmin: {
            css : {
                src: ["dist/final.css"],
                dest: ["dist/final.min.css"]
            }
        },

        // move js and css files from bower_components to lib
        // use [grunt-bower-task]
        bower: {
            install: {
                options: {
                    targetDir: './static',
                    layout: 'byType',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {},
                    copy: true
                }
            }
        }

    });

    // Load Grunt Tasks and plugins that installed by [npm install *** --save-dev]
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-bower-task');

    // Custom Tasks
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('bowerTask', ['bower:install']);
};