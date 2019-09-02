loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('good.json error', err.message);
})
    // non-existent json file
    .then(function () {
    return loadJSONAsync('absent.json');
})
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('absent.json error', err.message);
})
    // invalid json file
    .then(function () {
    return loadJSONAsync('bad.json');
})
    .then(function (val) { console.log(val); })["catch"](function (err) {
    console.log('bad.json error', err.message);
});
