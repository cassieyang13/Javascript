

define(function () {
    console.log("执行math-add.js");
    var add = function(x, y){
        return x+y;
    };

    return{
        add: add
    }
});