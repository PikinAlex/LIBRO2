Promise.resolve(123)
.then((res) => {
throw new Error('something bad happened')
return 456;
})
.then((res) => {
console.log(res);
return Promise.resolve(789);
})
.catch((err) => {
console.log(err.message);
});