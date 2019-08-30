
class Adder {
    add=(b: string): string =>{
        return this.a + b;
    }
}

class ExtendedAdder extends Adder {
    private superAdd = this.add;
    add= (b:string): string => {
        return this.superAdd(b);
    }
}