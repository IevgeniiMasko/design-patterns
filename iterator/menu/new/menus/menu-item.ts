export class MenuItem {
  constructor(
    public name: string,
    public desc: string,
    public vegetarian: boolean,
    public price: number,
  ) {}

  public getName() {
    return this.name;
  }

  public getDesc() {
    return this.desc;
  }

  public getPrice() {
    return this.price;
  }

  public isVegetarian() {
    return this.vegetarian;
  }
}
