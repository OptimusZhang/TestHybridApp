define(['base/BaseLayoutView',
        'hbs!templates/top/TopLVTmpl',
        'views/common/CommonHeaderIV',
        'views/top/TopContentCV',
        'views/common/CommonFooterIV'],
    function (BaseLayoutView,
              TopLVTmpl,
              CommonHeaderIV,
              TopContentCV,
              CommonFooterIV) {
        'use strict';
        return BaseLayoutView.extend({
            initialize : function () {
                console.log("TopLayoutView.js:initialize()");
            },
            template: TopLVTmpl,
            regions: {
                header: "#header",
                content: "#content",
                footer: "#footer"
            },
            onShow: function () {
                this.header.show(new CommonHeaderIV());
                this.content.show(new TopContentCV());
                this.footer.show(new CommonFooterIV());
            }
        });
    });