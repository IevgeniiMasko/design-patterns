import { PizzaIngredientFactory } from './ingredients';

export abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected cheese: string;
  protected veggies: string[];
  protected pepperoni: string;
  protected clams: string;

  public abstract prepare(): void;

  public bake() {
    console.log('Bake for 25 minutes at 350');
  }
  public cut() {
    console.log('Cutting the pizza into diagonal slices');
  }
  public box() {
    console.log('Place pizza in official PizzaStore box');
  }

  public getName() {
    return this.name;
  }
}

abstract class CheesePizza extends Pizza {
  protected name = 'Cheese pizza';

  constructor(private ingredientFactory: PizzaIngredientFactory) {
    super();
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);

    this.dough = this.ingredientFactory.createDough();
    console.log(`Tossing dough...: ${this.dough}`);

    this.sauce = this.ingredientFactory.createSauce();
    console.log(`Adding sauce...: ${this.sauce}`);

    this.cheese = this.ingredientFactory.createCheese();
    console.log(`Adding cheese...: ${this.cheese}`);
  }
}

export class NYCheesePizza extends CheesePizza {}

export class ChicagoCheesePizza extends CheesePizza {
  public override cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}

abstract class ClamPizza extends Pizza {
  protected name = 'Clam pizza';

  constructor(private ingredientFactory: PizzaIngredientFactory) {
    super();
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);

    this.dough = this.ingredientFactory.createDough();
    console.log(`Tossing dough...: ${this.dough}`);

    this.sauce = this.ingredientFactory.createSauce();
    console.log(`Adding sauce...: ${this.sauce}`);

    this.cheese = this.ingredientFactory.createCheese();
    console.log(`Adding cheese...: ${this.cheese}`);

    this.clams = this.ingredientFactory.createClams();
    console.log(`Adding clams...: ${this.clams}`);
  }
}

export class NYClamPizza extends ClamPizza {}
export class ChicagoClamPizza extends ClamPizza {}
