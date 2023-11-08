abstract class Beverage {
  description: string;
  cost: number;

  public getDescription() {
    return this.description;
  }
  public getCost() {
    return this.cost;
  }
}

abstract class BeverageDecorator extends Beverage {
  beverage: Beverage;

  public abstract getDescription(): string;
  public abstract getCost(): number;
}

class HouseBlend extends Beverage {
  description = 'House Blend';
  cost = 0.89;

  public getDescription() {
    return this.description;
  }

  public getCost() {
    return this.cost;
  }
}

class Expresso extends Beverage {
  description = 'Expresso';
  cost = 1.99;

  public getDescription() {
    return this.description;
  }

  public getCost() {
    return this.cost;
  }
}

class Mocha extends BeverageDecorator {
  description = 'Mocha';
  cost = 0.2;

  constructor(public beverage: Beverage) {
    super();
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', ' + this.description;
  }

  public getCost(): number {
    return this.beverage.getCost() + this.cost;
  }
}

class StarCoffee {
  public static main() {
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
