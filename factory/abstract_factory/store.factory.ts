import { PizzaIngredientFactory } from './ingredients';
import {
  NYCheesePizza,
  ChicagoCheesePizza,
  NYClamPizza,
  ChicagoClamPizza,
  Pizza,
} from './pizza';

export abstract class PizzaStore {
  constructor(protected ingredientFactory: PizzaIngredientFactory) {}

  orderPizza(type: string) {
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYCheesePizza(this.ingredientFactory);
      case 'clam':
        return new NYClamPizza(this.ingredientFactory);
      default:
        return new NYCheesePizza(this.ingredientFactory);
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new ChicagoCheesePizza(this.ingredientFactory);
      case 'clam':
        return new ChicagoClamPizza(this.ingredientFactory);
      default:
        return new ChicagoCheesePizza(this.ingredientFactory);
    }
  }
}
