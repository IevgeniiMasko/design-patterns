import { SimplePizzaFactory } from './pizza.factory';
import { Pizza } from './pizza';

export class PizzaStore {
  protected pizza: Pizza;

  constructor(private factory: SimplePizzaFactory) {}

  orderPizza(type: string) {
    const pizza = this.factory.create(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
