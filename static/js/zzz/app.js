/**
 * Created by jianwu.zhang on 2015/12/04.
 */
define(['marionette', 'backbone',
        'properties'],
    function (Mn, Bb, prop) {
        'use strict';

        // config global variable in app
        var app = new Mn.Application({
            // define Regions
            regions: {
                mainRegion: '#main-region'
            }
        });
        app.Mn = Mn;
        app.Bb = Bb;
        app.properties = prop;

        //define app
        require(['layoutViews/baseLayoutView'],
            function (BaseLayoutView) {

                //define modules

                //define routers

                // show regions
                app.mainRegion.show(new BaseLayoutView());


                app.on('start', function () {
                    if (app.Bb.history) {
                        app.Bb.history.start();
                    }
                });
            });


        return app;
    });
