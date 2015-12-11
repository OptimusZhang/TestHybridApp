define(['marionette', 'base/BaseLayoutView','hbs!../../templates/legal/LegalLayoutTmpl'],
    function (Marionette, BaseLayoutView, LegalLayoutTmpl) {
        'use strict';
        return BaseLayoutView.extend({
            initialize : function () {
                console.log("LegalLayoutView.js:initialize()");
            },
            template: LegalLayoutTmpl
        });
    });