import { ChicagoPizzaFactory, NYPizzaFactory } from './pizza.factory';
import { PizzaStore } from './store';

class TestDrive {
  public main() {
    const nyPizzaFactory = new NYPizzaFactory();
    const nyPizzaStore = new PizzaStore(nyPizzaFactory);

    const chicagoPizzaFactory = new ChicagoPizzaFactory();
    const chicagoPizzaStore = new PizzaStore(chicagoPizzaFactory);

    const nyPizza = nyPizzaStore.orderPizza('cheese');
    console.log(`User ordered a ${nyPizza.getName()}\n`);

    const chicagoPizza = chicagoPizzaStore.orderPizza('cheese');
    console.log(`User ordered a ${chicagoPizza.getName()}\n`);
  }
}

new TestDrive().main();
