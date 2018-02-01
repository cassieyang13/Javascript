
define(function(){

    console.log("执行a.js");
    return {
        hello: function(){
            console.log("hello, a1.js");
        }
    }
});

// 等价于
/*define({
    hello: function(){
        console.log("hello, a1.js");
    }
});*/

