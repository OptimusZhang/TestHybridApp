define(['base/BaseLayoutView',
        'hbs!../../templates/top/TopLayoutTmpl',
        'itemViews/common/CommonHeaderItemView',
        'itemViews/top/TopContentItemView',
        'itemViews/common/CommonFooterItemView'],
    function (BaseLayoutView,
              TopLayoutTmpl,
              CommonHeaderItemView,
              TopContentItemView,
              CommonFooterItemView) {
        'use strict';
        return BaseLayoutView.extend({
            initialize : function () {
                console.log("TopLayoutView.js:initialize()");
            },
            template: TopLayoutTmpl,
            regions: {
                header: "#header",
                content: "#content",
                footer: "#footer"
            },
            onShow: function () {
                this.header.show(new CommonHeaderItemView().render());
                this.content.show(new TopContentItemView().render());
                this.footer.show(new CommonFooterItemView().render());
            }
        });
    });