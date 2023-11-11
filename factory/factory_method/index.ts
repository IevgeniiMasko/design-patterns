import { ChicagoPizzaStore, NYPizzaStore } from './store.factory';

class TestDrive {
  public main() {
    const nyStore = new NYPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    const nyPizza = nyStore.orderPizza('cheese');
    console.log(`User ordered a ${nyPizza.getName()}\n`);

    const chicagoPizza = chicagoStore.orderPizza('cheese');
    console.log(`User ordered a ${chicagoPizza.getName()}\n`);
  }
}

new TestDrive().main();
