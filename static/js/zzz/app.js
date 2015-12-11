/**
 * Created by jianwu.zhang on 2015/12/04.
 */
define(['marionette', 'backbone','hbs',
        'properties', 'base/BaseApplication', 'routers/MyRouter'],
    function (Mn, Bb, Hbs, prop, BaseApp, MyRooter) {
        'use strict';

        // config global variable in app
        var app = new BaseApp({
            // define Regions
            regions: {
                mainRegion: '#main-region'
            }
        });
        window.app = app;
        app.Mn = Mn;
        app.Bb = Bb;
        app.properties = prop;

        //define routers
        var myRooter = new MyRooter();

        app.on('start', function () {
            if (app.Bb.history) {
                app.Bb.history.start();
            }

            myRooter.navigate(myRooter.routes.top ,{
                trigger: true
            });
        });
        //define app
        require(['routers/MyRouter'],
            function (TopLayoutView, MyRooter) {

            });

        return app;
    });
