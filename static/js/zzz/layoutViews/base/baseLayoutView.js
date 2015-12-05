define(['marionette', 'hbs!templates/baseLayoutTmpl'],
    function (Marionette, BaseLayoutTmpl) {
        'use strict'
        return Marionette.LayoutView.extend({
            initialize : function () {
                console.log("baseLayoutView.js:initialize()");
            },
            el: BaseLayoutTmpl
        });
    });