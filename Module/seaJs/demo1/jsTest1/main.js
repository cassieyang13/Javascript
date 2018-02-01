/**
 * Created by skysoft on 2017/3/13.
 */

//alias用法

/*
seajs.config({
    //别名配置
    alias:{
        "a": "./a",
        "b": "./b",
        "test":"../test1/jsTest1/test1",
        "jquery": "../../js/lib/jquery-1.11.0.min",
        "app": "../../js/app/app"
    }
});

seajs.use(["test"], function(test1,a) {
    console.log(test1.func2());
});
*/


//paths用法
seajs.config({
    paths:{
        "js": "../../js"//跨目录调用，目录比较深时
    },

    alias:{
        "a": "./a1",
        "b": "./b",
        "test":"./jsTest1/test1",
        "jquery": "js/lib/jquery-1.11.0.min",//这里的js=>../../js
        "app": "js/app/app"
    }
});

seajs.use(["test"], function(test1) {
    //console.log(a.run(10));
    console.log(test1.func2(test1.data2));
});





