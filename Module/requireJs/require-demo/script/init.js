
define(["jquery", "module1"],function ($, m1) {
   var initPage = function () {
       $('.content').html(m1.run());
   };

    return {
        initPage: initPage
    }

});