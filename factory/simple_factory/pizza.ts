export abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected toppings: string[] = [];

  public prepare() {
    console.log(`Preparing ${this.name}`);
    console.log(`Tossing dough...`);
    console.log(`Adding sauce...`);
    console.log(`Adding toppings: `);
    this.toppings.forEach((t) => console.log(`  ${t}`));
  }
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

export class NYCheesePizza extends Pizza {
  protected name = 'NY Cheese pizza';
  protected dough = 'Thin Crust Dough';
  protected sauce = 'Marinara Sauce';
  protected toppings = ['Grated Reggiano Cheese'];
}
export class NYPepperoniPizza extends Pizza {
  protected name = 'NY Pepperoni pizza';
}
export class NYClamPizza extends Pizza {
  protected name = 'NY Clam pizza';
}
export class NYVeggiePizza extends Pizza {
  protected name = 'NY Veggie pizza';
}

export class ChicagoCheesePizza extends Pizza {
  protected name = 'Chicago Cheese pizza';
  protected dough = 'Extra Thick Crust Dough';
  protected sause = 'Plum Tomato Sauce';
  protected toppings = ['Shredded Mozzarella Cheese'];

  public override cut(): void {
    console.log('Cutting the pizza into square slices');
  }
}
export class ChicagoPepperoniPizza extends Pizza {
  protected name = 'Chicago Pepperoni pizza';
}
export class ChicagoClamPizza extends Pizza {
  protected name = 'Chicago Clam pizza';
}
export class ChicagoVeggiePizza extends Pizza {
  protected name = 'Chicago Veggie pizza';
}
