import {
  Pizza,
  ChicagoCheesePizza,
  ChicagoClamPizza,
  ChicagoPepperoniPizza,
  ChicagoVeggiePizza,
  NYCheesePizza,
  NYClamPizza,
  NYPepperoniPizza,
  NYVeggiePizza,
} from './pizza';

export interface SimplePizzaFactory {
  create(type: string): Pizza;
}

export class NYPizzaFactory implements SimplePizzaFactory {
  create(type: string) {
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
export class ChicagoPizzaFactory implements SimplePizzaFactory {
  create(type: string) {
    switch (type) {
      case 'cheese':
        return new ChicagoCheesePizza();
      case 'pepperoni':
        return new ChicagoPepperoniPizza();
      case 'clam':
        return new ChicagoClamPizza();
      case 'veggie':
        return new ChicagoVeggiePizza();
      default:
        return new ChicagoCheesePizza();
    }
  }
}
