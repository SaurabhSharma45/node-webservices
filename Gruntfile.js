/*
 * Gruntfile.js
 */

'use strict';

module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('intern');
    grunt.loadNpmTasks('grunt-nodemon');

    // Project configuration.
    grunt.initConfig({

        nodemon: {
                dev: {
                    script: './bin/www'
                }
            }
    });

    grunt.registerTask('nodemon', [
        'nodemon'
    ]);



};
