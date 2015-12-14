/**
 * Created by jianwu.zhang on 2015/12/11.
 */
define(['base/BaseCollectionView',
    'collections/top/TopC',
    'views/top/TopContentIV'],
    function (BaseCollectionView,
              TopC,
              TopContentIV) {
        'use strict';
        return BaseCollectionView.extend({

            childView: TopContentIV,
            template: false,
            tagName: "div",
            className: "row categoryContainer",

            initialize : function () {
                console.log("TopContentCV.js:initialize()");
            },

            onBeforeRender: function() {
                this.collection = new TopC();
                // TODO get categories information from DB for top page.
                //this.collection.fetch();
                this.collection.set([
                    {
                        navId: "N0001",
                        navName: "法律"
                    },
                    {
                        navId: "N0002",
                        navName: "保险"
                    },
                    {
                        navId: "N0003",
                        navName: "其他一"
                    },
                    {
                        navId: "N0004",
                        navName: "其他二"
                    },
                    {
                        navId: "N0005",
                        navName: "其他三"
                    },
                    {
                        navId: "N0006",
                        navName: "其他四"
                    }]);
                _.each(this.collection.models, function(model, index, list){
                    if (index%2 === 0) {
                        model.set("slideFromWhere","category_right");
                    }
                    else {
                        model.set("slideFromWhere","category_left");
                    }
                })
            },

            onShow: function() {

                // set page style from properties file.
                this.el.className += (' ' + app.props.pageStyle);

                setTimeout(function(){
                    $('.category_left .categoryWrap').addClass('slideInFromLeft');
                    $('.category_right .categoryWrap').addClass('slideInFromRight');
                }, 100);
            }
        });
    });