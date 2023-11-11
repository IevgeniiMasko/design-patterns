import {
  NYCheesePizza,
  NYClamPizza,
  NYPepperoniPizza,
  NYVeggiePizza,
  Pizza,
} from './pizza';

export abstract class PizzaStore {
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
        return new NYCheesePizza();
      case 'pepperoni':
        return new NYPepperoniPizza();
      case 'clam':
        return new NYClamPizza();
      case 'veggie':
        return new NYVeggiePizza();
      default:
        return new NYCheesePizza();
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new NYCheesePizza();
      case 'pepperoni':
        return new NYPepperoniPizza();
      case 'clam':
        return new NYClamPizza();
      case 'veggie':
        return new NYVeggiePizza();
      default:
        return new NYCheesePizza();
    }
  }
}
