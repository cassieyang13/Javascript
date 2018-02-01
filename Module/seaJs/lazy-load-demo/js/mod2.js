

define(function (require, exports, module) {

    console.log('require module: mod2');
    var hello = function () {
        console.log("hello mod2");
    };

    module.exports = {
        hello: hello
    }
});