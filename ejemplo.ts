function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
    }
    var iterator = generator();
    console.log('Starting iteration');
    console.log(iterator.next());
    console.log(iterator.next()); 
    console.log(iterator.next()); 