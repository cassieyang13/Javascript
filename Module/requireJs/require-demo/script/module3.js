
define(["module4"],function (m4) {
    var run = function () {
        return $.merge(['module3'], m4.run());
    };

    return {
        run: run
    }
});