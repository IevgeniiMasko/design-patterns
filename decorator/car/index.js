"use strict";
class Car {
}
class ModelS extends Car {
    getDescription() {
        return 'Model S';
    }
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    getDescription() {
        return 'Model X';
    }
    cost() {
        return 73000;
    }
}
class CarOption extends Car {
}
class AutoPilot extends CarOption {
    constructor(decoratedCar) {
        super();
        this.decoratedCar = decoratedCar;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ' with autopilot';
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class ReatFacingSeats extends CarOption {
    constructor(decoratedCar) {
        super();
        this.decoratedCar = decoratedCar;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ' with rear facing seats';
    }
    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}
let myTesla = new ModelX();
myTesla = new AutoPilot(myTesla);
myTesla = new ReatFacingSeats(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
