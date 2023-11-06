interface FlyBehavior {
  fly(): void;
}
interface QuakBehavior {
  quack(): void;
}

class FlyingWithWings implements FlyBehavior {
  fly(): void {
    console.log('Flying with wings');
  }
}
class FlyRocketPower implements FlyBehavior {
  fly(): void {
    console.log('Flying with rocket power');
  }
}
class FlyingNoWay implements FlyBehavior {
  fly(): void {
    console.log('Can not fly');
  }
}
class Quack implements QuakBehavior {
  quack(): void {
    console.log('Duck quacks');
  }
}
class Squeak implements QuakBehavior {
  quack(): void {
    console.log('Duck squeaks');
  }
}
class MuteQuack implements QuakBehavior {
  quack(): void {
    console.log('Duck is muted');
  }
}

class Duck {
  protected flyBehavior = new FlyingWithWings();
  protected quakBehavior = new Quack();

  public setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
  public setQuackBehavior(quakBehavior: QuakBehavior) {
    this.quakBehavior = quakBehavior;
  }

  public performFly() {
    return this.flyBehavior.fly();
  }
  public performQuack() {
    return this.quakBehavior.quack();
  }

  public display() {
    console.log('this is a duck');
  }
}

class MallardDuck extends Duck {
  public override display(): void {
    console.log('this is a mallard duck');
  }
}
class RubberDuck extends Duck {
  public override display(): void {
    console.log('this is a rubber duck');
  }
}
class DecoyDuck extends Duck {
  public override display(): void {
    console.log('this is a decoy duck');
  }
}

const mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

mallardDuck.setQuackBehavior(new MuteQuack());
mallardDuck.performQuack();

mallardDuck.setFlyBehavior(new FlyRocketPower());
mallardDuck.performFly();
