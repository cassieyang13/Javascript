

define(["module2", "module3"],function (m2, m3) {
    var run = function () {
        return $.merge(['module1'], $.merge(m2.run(), m3.run()));
    };

    return {
        run: run
    }
});