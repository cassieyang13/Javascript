

define(function (require, exports, module) {
    var jquery = require("jquery");

    console.log(require.resolve("jquery"));

    $("body").append("<h1>a1.js</h1>");

    var run = function(data){
        console.log("a:"+ data);
    };

    module.exports =  {
        run: run
    }
    
});