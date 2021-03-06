/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
        minifyCSS: {
            enabled: true
        },
        minifyJS: {
            enabled: true
        },
        sourcemaps: {
            enabled: false,
            extension: ['js']
        }
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

    app.import('bower_components/AdminLTE/dist/css/AdminLTE.min.css');
    app.import('bower_components/AdminLTE/dist/css/skins/_all-skins.min.css');
    app.import('bower_components/AdminLTE/dist/js/app.min.js');

    app.import('bower_components/moment/min/moment-with-locales.min.js');

    app.import('bower_components/hashids/lib/hashids.min.js');
    return app.toTree();
};
