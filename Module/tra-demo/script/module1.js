
var module1 = {
    run: function() {
        return $.merge(['module1'], $.merge(module2.run(), module3.run()));
    }
};
