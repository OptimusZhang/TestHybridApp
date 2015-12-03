/**
 * Created by jianwu.zhang on 2015/12/03.
 */
requirejs.config({
    baseUrl: '../js',
    paths: {
        'jquery': 'jquery/jquery',
        'bootstrap': 'bootstrap/bootstrap',
        'underscore': 'underscore/underscore',
        'backbone': 'backbone/backbone',
        'angularjs': 'angularjs/angularjs',
        'hbs': 'require-handlebars-plugin/hbs'
    },
    shim : {
        'bootstrap': {
            deps : 'jquery',
        },
        'backbone': {
            deps : 'underscore',
            exports: 'Backbone'
        }


    }

});