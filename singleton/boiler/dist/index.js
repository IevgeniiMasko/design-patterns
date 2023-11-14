"use strict";
class ChocolateBoiler {
    constructor() {
        this.empty = true;
        this.boiled = true;
    }
    static getInstance() {
        if (!ChocolateBoiler.instance) {
            ChocolateBoiler.instance = new ChocolateBoiler();
        }
        return ChocolateBoiler.instance;
    }
    fill() {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }
    drain() {
        if (!this.isEmpty() && this.isBoiled()) {
            this.empty = true;
        }
    }
    boil() {
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true;
        }
    }
    isEmpty() {
        return this.empty;
    }
    isBoiled() {
        return this.boiled;
    }
}
const boiler1 = ChocolateBoiler.getInstance();
const boiler2 = ChocolateBoiler.getInstance();
console.log('same:', boiler1 === boiler2);
