function rest(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
rest('foo', 'bar');
rest('foo', 'bar', 'bas', 'qux');
