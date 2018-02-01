
//方式1 exports

define(function (require, exports, module) {
    var a = require("a");//加载a模块
    var b = require("b");//加载b模块

    var data = 1;//私有数据

    var  func1 = function(){//私有方法
        a.run(data);//调用a模块中的run方法
    };

    exports.data2 = 2;//对外提供公共数据
    exports.func2 = function(data2){//对外提供公共方法
        return "hello,"+ data2;
    }

});

//方式2 使用module.exports
/*
seajs.config({
    vars: {
        "a": "a1",
        "b": "b"
    }
});
define(function (require, exports, module) {
    var a = require("../jsTest1/{a}.js");//加载a模块
    var b = require("../jsTest1/{b}.js");//加载b模块
    var data = 1;//私有数据
    var  func1 = function(){//私有方法
        a.run(data);//调用a模块中的run方法
    };
    //对外提供公共接口
    module.exports = {
        data2: 2,
        func2: function(data2){
            return "hello,"+ data2;
        }
    };
});*/

//方式3
/*

define(function (require, exports, module) {
    var a = require("a");//加载a模块
    var b = require("b");//加载b模块
    var app = require("app");

    var data = 1;//私有数据

    var  func1 = function(){//私有方法
        a.run(data);//调用a模块中的run方法
    };

    return {
        data2 : 2,
        func2: function(data2) {

            return "hello,"+ data2;
        }
    };
});
*/

