// 全局配置

// baseUrl 用法
/*require.config({
    baseUrl: "js/lib",

    paths:{
        "jquery":"jquery-1.11.0.min",
        "a": "../a",
        "b": "../b",
        "math": "../math-add"
    }
});*/

// path 用法
/*require.config({

    paths:{
        "jquery":"lib/jquery-1.11.0.min",
        "a": "a",
        "b": "b",
        "math": "math-add"
    }
});*/

require.config({
    paths:{
        "jquery":["http://libs.baidu.com/jquery/2.0.3/jquery", "../../../js/lib/jquery-1.11.0.min"],
        "a": "a",
        "b": "b",
        "math": "math-add"
    }
});

// 加载文件
require(["jquery","a","b"], function ($,a,b) {
    console.log("执行main.js");
    a.hello();
    $("#div").click(function() {
        b.hello();
    });
    console.log("加载完成");
    $("body").append("<h2>加载完成</h2>")
});


