

define(function (require, exports, module) {
    var m4 = require('module4');

    exports.run = function () {
        return $.merge(['module3'], m4.run());
    }
});