Promise.resolve(123)
    .then(function (res) {
    throw new Error('something bad happened');
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(789);
})["catch"](function (err) {
    console.log(err.message);
});
