Promise.resolve(123)
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
});
