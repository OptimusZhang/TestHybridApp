/**
 * Created by jianwu.zhang on 2015/12/14.
 */
define(['marionette'], function (Mn) {
    'use strict';
    return Mn.CollectionView.extend({
        initialize : function () {
            console.log("BaseCollectionView.js:initialize()");
        }
    });
});