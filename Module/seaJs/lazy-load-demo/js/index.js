
define(function (require, exports, module) {

    console.log("require module: index");

    var mod1 = require("./mod1");
    mod1.hello();
    var mod2 = require("./mod2");
    mod2.hello();

    module.exports =  {
        hello: function() {
            console.log("hello index");
        }
    };
});