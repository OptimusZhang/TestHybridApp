/**
 * Created by jianwu.zhang on 2015/12/14.
 */
define(['backbone'], function(Bb){
    'use strict';
    return Bb.Collection.extend({
        initialize : function () {
            console.log("BaseCollection.js:initialize()");
        }
    })
});