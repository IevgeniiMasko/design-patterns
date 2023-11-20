import { MenuItem } from './menu-item';

export class BreakfastMenu {
  menuItems: Map<number, MenuItem>;

  constructor() {
    this.menuItems = new Map();

    this.addItem(
      'K&B’s Pancake Breakfast',
      'Pancakes with scrambled eggs, and toast',
      true,
      2.99,
    );
    this.addItem(
      'Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      2.99,
    );
    this.addItem(
      'Blueberry Pancakes',
      'Pancakes made with fresh blueberries',
      true,
      3.49,
    );
    this.addItem(
      'Waffles',
      'Waffles, with your choice of blueberries or strawberries',
      true,
      3.59,
    );
  }

  addItem(name: string, desc: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, desc, vegetarian, price);
    const size = this.menuItems.size;
    this.menuItems.set(size, menuItem);
  }

  getMenuItems() {
    return this.menuItems;
  }
}
