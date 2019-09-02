Promise.reject(new Error('something bad happened'))
    .then(function (res) {
    console.log(res);
    return 456;
})["catch"](function (err) {
    console.log(err.message);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
});
