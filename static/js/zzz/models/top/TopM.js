/**
 * Created by jianwu.zhang on 2015/12/14.
 */
define(['base/BaseModel'],
    function (BaseModel) {
        'use strict';
        return BaseModel.extend({
            initialize : function () {
                console.log("TopM.js:initialize()");
            },
            default: {
                navId: '',
                navName: '',
                slideFromWhere: 'category_left'
            }
        });
    });