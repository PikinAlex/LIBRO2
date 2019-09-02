function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
    }
    var gen = logGenerator();
    gen.next();
    gen.next('pretzel');
    gen.next('california');
    gen.next('mayonnaise');