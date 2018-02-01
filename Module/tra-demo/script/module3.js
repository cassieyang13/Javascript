
var module3 = {
    run: function() {
        return $.merge(['module3'], module4.run());
    }
};