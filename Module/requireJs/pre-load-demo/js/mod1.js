

define(function (require, exports, module) {
    console.log('require module: mod1');

    var hello = function () {
        console.log("hello mod1");
    };

    module.exports = {
        hello: hello
    }
});