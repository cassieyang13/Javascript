

define(function (require, exports, module) {

    console.log("执行test1.js");
    // exports 是 module.exports 的一个引用
    console.log(module.exports === exports); // true

    // 重新给 module.exports 赋值
    module.exports = {};

    // exports 不再等于 module.exports
    console.log(module.exports === exports); // false

});