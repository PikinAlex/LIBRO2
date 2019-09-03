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