var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log('I get called:', res === 123);
});
promise["catch"](function (err) {
});
