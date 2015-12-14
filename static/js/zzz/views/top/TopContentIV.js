/**
 * Created by jianwu.zhang on 2015/12/11.
 */
define(['base/BaseItemView',
    'hbs!templates/top/TopContentIVTmpl',
    'models/top/TopM'],
    function (BaseItemView, TopContentIVTmpl, TopM) {
        'use strict';
        return BaseItemView.extend({

            model: TopM,
            template: TopContentIVTmpl,

            initialize : function () {
                console.log("TopContentItemView.js:initialize()");
            }
        });
    });