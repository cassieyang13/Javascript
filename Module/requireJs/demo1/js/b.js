


define(["math"], function (math) {
    console.log("执行b.js");

    console.log(math.add(10, 10));
    return {
        hello: function () {
            console.log("hello, b.js");
        }
    }
});

// 等价于
/*
define(function (require) {
    console.log("执行b.js");
    var math = require("math");
    console.log(math.add(10, 10));

    return {
        hello: function () {
            console.log("hello, b.js");
        }
    }
});*/



/*define(function (require) {
    console.log("执行b.js");
    require(["math"], function (math) {
        console.log(math.add(10, 10));
    });
    return {
        hello: function () {
            console.log("hello, b.js");
        }
    }
});*/



