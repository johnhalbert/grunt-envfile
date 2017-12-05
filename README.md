# grunt-envfile

> Grunt plugin to provide variables in .env files in process.env and Grunt templates.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-envfile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-envfile');
```

## The "envfile" task

### Overview
In your project's Gruntfile, add a section named `envfile` to the data object passed into `grunt.initConfig()`.

No options are necessary, task can be defined singly or as a multi-task with multiple targets.  In either configuration all that's needed in the task, or for each target, is a `src` member and envfile location(s).

```js
grunt.initConfig({
  envfile: {
    src: [ './.env' ], // defined singly for the task
    your_target: {
      // Or defined as a multi-task with more than one target
      src: [ './.env' ]
    }
  }
});
```

Envfiles should be in the following format:

```
MY_VAR=value
MY_SECOND_VAR="second value"
```

These values become available for use in `process.env` or in Grunt templates:

```
process.env.MY_VAR === 'value' // true

grunt.initConfig({
  my_task: {
    some_val: '<%= MY_VAR %>' 
  }
});

// some_val will now hold the value 'value'.
grunt.registerTask('the_task', ['envfile:my_target', 'my_task']);
```

## Release History
- 0.1.0 - Initial release.
