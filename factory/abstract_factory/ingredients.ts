export abstract class PizzaIngredientFactory {
  protected type: string;

  public abstract createDough(): string;
  public abstract createSauce(): string;
  public abstract createCheese(): string;
  public abstract createVeggies(): string[];
  public abstract createPepperoni(): string;
  public abstract createClams(): string;
}

export class NYPizzaIngredientFactory extends PizzaIngredientFactory {
  protected type: 'NY';

  public createDough(): string {
    return 'Thin crust dough';
  }
  public createSauce(): string {
    return 'Marina sauce';
  }
  public createCheese(): string {
    return 'Reggiano cheese';
  }
  public createVeggies(): string[] {
    return ['Garlic', 'Onion', 'Mushroom', 'Red Pepper'];
  }
  public createPepperoni(): string {
    return 'Sliced pepperoni';
  }
  public createClams(): string {
    return 'Fresh clams';
  }
}

export class ChicagoPizzaIngredientFactory extends PizzaIngredientFactory {
  protected type: 'Chicago';

  public createDough(): string {
    return 'Thick crust dough';
  }
  public createSauce(): string {
    return 'Plum Tomato sauce';
  }
  public createCheese(): string {
    return 'Mozzarella cheese';
  }
  public createVeggies(): string[] {
    return ['Black olives', 'Spinach'];
  }
  public createPepperoni(): string {
    return 'Sliced pepperoni';
  }
  public createClams(): string {
    return 'Frozen clams';
  }
}
