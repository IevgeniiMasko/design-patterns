"use strict";
class FlyingWithWings {
    fly() {
        console.log('Flying with wings');
    }
}
class FlyRocketPower {
    fly() {
        console.log('Flying with rocket power');
    }
}
class FlyingNoWay {
    fly() {
        console.log('Can not fly');
    }
}
class Quack {
    quack() {
        console.log('Duck quacks');
    }
}
class Squeak {
    quack() {
        console.log('Duck squeaks');
    }
}
class MuteQuack {
    quack() {
        console.log('Duck is muted');
    }
}
class Duck {
    constructor() {
        this.fly = new FlyingWithWings();
        this.quack = new Quack();
    }
    setFlyBehavior(fly) {
        this.fly = fly;
    }
    setQuackBehavior(quack) {
        this.quack = quack;
    }
    performFly() {
        return this.fly.fly();
    }
    performQuack() {
        return this.quack.quack();
    }
    display() {
        console.log('this is a duck');
    }
}
class MallardDuck extends Duck {
    display() {
        console.log('this is a mallard duck');
    }
}
class RubberDuck extends Duck {
    display() {
        console.log('this is a rubber duck');
    }
}
class DecoyDuck extends Duck {
    display() {
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
