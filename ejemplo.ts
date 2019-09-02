function* generator() {
    try {
    yield 'foo';
    throw Error("Test");
    }
    catch(err) {
    console.log(err.message);
    }
    }
    var iterator = generator();
    
    var foo = iterator.next();
    console.log(foo.value);