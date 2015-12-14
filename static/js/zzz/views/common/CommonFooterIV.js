/**
 * Created by jianwu.zhang on 2015/12/11.
 */
define(['../../base/BaseItemView','hbs!templates/common/CommonFooterIVTmpl'],
    function (BaseItemView, CommonFooterItemViewTmpl) {
        'use strict';
        return BaseItemView.extend({
            initialize : function () {
                console.log("CommonFooterItemView.js:initialize()");
            },
            template: CommonFooterItemViewTmpl
        });
    });