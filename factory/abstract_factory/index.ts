import {
  ChicagoPizzaIngredientFactory,
  NYPizzaIngredientFactory,
} from './ingredients';
import { ChicagoPizzaStore, NYPizzaStore } from './store.factory';

class TestDrive {
  public main() {
    const nyIngredientFactory = new NYPizzaIngredientFactory();
    const chicagoIngredientFactory = new ChicagoPizzaIngredientFactory();

    const nyStore = new NYPizzaStore(nyIngredientFactory);
    const chicagoStore = new ChicagoPizzaStore(chicagoIngredientFactory);

    const nyCheesePizza = nyStore.orderPizza('cheese');
    console.log(`User1 ordered a ${nyCheesePizza.getName()}\n`);

    const chicagoCheesePizza = chicagoStore.orderPizza('cheese');
    console.log(`User2 ordered a ${chicagoCheesePizza.getName()}\n`);

    const chicagoClamPizza = chicagoStore.orderPizza('clam');
    console.log(`User3 ordered a ${chicagoClamPizza.getName()}\n`);
  }
}

new TestDrive().main();
