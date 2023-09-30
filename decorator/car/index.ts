abstract class Car {
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class ModelS extends Car {
  public getDescription(): string {
    return 'Model S';
  }

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public getDescription(): string {
    return 'Model X';
  }

  public cost(): number {
    return 73000;
  }
}

abstract class CarOption extends Car {
  protected abstract decoratedCar: Car;

  public abstract getDescription(): string;
  public abstract cost(): number;
}

class AutoPilot extends CarOption {
  constructor(protected decoratedCar: Car) {
    super();
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ' with autopilot';
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOption {
  constructor(protected decoratedCar: Car) {
    super();
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ' with rear facing seats';
  }
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

let myTesla = new ModelX();
myTesla = new AutoPilot(myTesla);
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.cost());
