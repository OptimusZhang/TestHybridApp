/**
 * Created by jianwu.zhang on 2015/12/14.
 */
define(['base/BaseCollection', 'models/top/TopM'],
    function (BaseCollection, TopM) {
        'use strict';
        return BaseCollection.extend({
            model: TopM,

            initialize : function () {
                console.log("TopC.js:initialize()");
            }
        });
    });