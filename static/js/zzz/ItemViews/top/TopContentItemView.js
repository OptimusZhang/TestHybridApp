/**
 * Created by jianwu.zhang on 2015/12/11.
 */
define(['base/BaseItemView','hbs!../../templates/top/TopContentItemViewTmpl'],
    function (BaseItemView, TopContentItemViewTmpl) {
        'use strict';
        return BaseItemView.extend({
            initialize : function () {
                console.log("TopContentItemView.js:initialize()");
            },
            template: TopContentItemViewTmpl,

            onShow: function() {
                setTimeout(function(){
                    $('.category_left .categoryWrap').addClass('slideInFromLeft');
                    $('.category_right .categoryWrap').addClass('slideInFromRight');
                }, 100);

                //setTimeout(function(){
                //    $('.category_left .categoryWrap').removeClass('slideInFromLeft');
                //    $('.category_right .categoryWrap').removeClass('slideInFromRight');
                //}, 2000);
            }
        });
    });