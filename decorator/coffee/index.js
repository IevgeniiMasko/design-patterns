"use strict";
class Beverage {
    getDescription() {
        return this.description;
    }
    getCost() {
        return this.cost;
    }
}
class BeverageDecorator extends Beverage {
}
class HouseBlend extends Beverage {
    constructor() {
        super(...arguments);
        this.description = 'House Blend';
        this.cost = 0.89;
    }
    getDescription() {
        return this.description;
    }
    getCost() {
        return this.cost;
    }
}
class Expresso extends Beverage {
    constructor() {
        super(...arguments);
        this.description = 'Expresso';
        this.cost = 1.99;
    }
    getDescription() {
        return this.description;
    }
    getCost() {
        return this.cost;
    }
}
class Mocha extends BeverageDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
        this.description = 'Mocha';
        this.cost = 0.2;
    }
    getDescription() {
        return this.beverage.getDescription() + ', ' + this.description;
    }
    getCost() {
        return this.beverage.getCost() + this.cost;
    }
}
class StarCoffee {
    static main() {
        const beverage1 = new Expresso();
        console.log(beverage1.getDescription());
        console.log(beverage1.getCost());
        let beverage2 = new HouseBlend();
        console.log(beverage2.getDescription());
        console.log(beverage2.getCost());
        beverage2 = new Mocha(beverage2);
        console.log(beverage2.getDescription());
        console.log(beverage2.getCost());
        beverage2 = new Mocha(beverage2);
        console.log(beverage2.getDescription());
        console.log(beverage2.getCost());
    }
}
StarCoffee.main();
