class Disposable {
    isDisposed: boolean;
    dispose() {
    this.isDisposed = true;
    }
    }

    class Activatable {
    isActive: boolean;
    activate() {
    this.isActive = true;
    }
    deactivate() {
    this.isActive = false;
    }
};

class SmartObject implements Disposable, Activatable {
    isDisposed: boolean = false;
    dispose: () => void; 
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
};
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
    derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
    });
    }

    applyMixins(SmartObject, [Disposable, Activatable]);