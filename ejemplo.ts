function* generator() {
    var bar = yield 'Console log';
    console.log(bar);
    yield 1;
    };
    const iterator = generator();
    const foo = iterator.next();
    console.log(foo.value);
    const nextThing = iterator.next('Un texto inyectado'); 
    console.log(nextThing);