define(['marionette', 'base/BaseLayoutView','hbs!templates/legal/LegalLVTmpl'],
    function (Marionette, BaseLayoutView, LegalLVTmpl) {
        'use strict';
        return BaseLayoutView.extend({
            initialize : function () {
                console.log("LegalLV.js:initialize()");
            },
            template: LegalLVTmpl
        });
    });