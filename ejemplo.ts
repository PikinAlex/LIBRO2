const promise = new Promise((resolve, reject) => {
    resolve(123);
    });
    promise.then((res) => {
    console.log('I get called:', res === 123);
    });
    promise.catch((err) => {
});