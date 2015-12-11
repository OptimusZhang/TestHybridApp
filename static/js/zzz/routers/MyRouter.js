/**
 * Created by jianwu.zhang on 2015/12/11.
 */
define(['base/BaseRouter',
    'layoutViews/top/TopLayoutView',
    'layoutViews/legal/LegalLayoutView'],
    function (BaseRouter, TopLayoutView, LegalLayoutView) {
        'use strict';
        return BaseRouter.extend({
            initialize : function () {
                console.log("MyRouter.js:initialize()");
            },
            routes: {
                "top": "top",  // Top page
                "legal": "legal" // legal page
            },

            top: function(){
                console.log("topRouter:showTop();");
                app.mainRegion.show(new TopLayoutView());
            },
            legal: function() {
                console.log("lawRouter:showLegals();");
                app.mainRegion.show(new LegalLayoutView());
            }
        });
    });