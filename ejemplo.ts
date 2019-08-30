let add=(x: number )=> (y: number) => x+y;
add(123)(456);
let add123= add(123);
add123(456);