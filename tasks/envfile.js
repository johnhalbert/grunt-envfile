/*
 * grunt-envfile
 * https://github.com/johnhalbert/grunt-envfile
 *
 * Copyright (c) 2017 John Halbert
 * Licensed under the MIT license.
 */

'use strict';

const ini = require('ini');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('envfile', 'Grunt plugin to provide variables in .env file in process.env and Grunt templates.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
        // Reads the env file and processes each variable, including them in
        // process.env as well as making them available for grunt templates
        const config = ini.parse(grunt.file.read(filepath));
        Object.keys(config)
              .forEach(key => {
                process.env[key] = config[key];
                grunt.config(key, config[key]);
              });
      });
    });
  });

};
