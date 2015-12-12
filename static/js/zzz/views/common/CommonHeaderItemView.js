/**
 * Created by jianwu.zhang on 2015/12/11.
 */
define(['../../base/BaseItemView','hbs!../../templates/common/CommonHeaderItemViewTmpl'],
    function (BaseItemView, CommonHeaderItemViewTmpl) {
        'use strict';
        return BaseItemView.extend({
            initialize : function () {
                console.log("CommonHeaderItemView.js:initialize()");
            },
            template: CommonHeaderItemViewTmpl
        });
    });