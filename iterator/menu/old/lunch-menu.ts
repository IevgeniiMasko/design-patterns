import { MenuItem } from './menu-item';

export class LunchMenu {
  public MAX_ITEMS = 6;
  menuItems: MenuItem[] = [];

  constructor() {
    this.addItem(
      'Vegetarian BLT',
      '(Fakin’) Bacon with lettuce & tomato on whole wheat',
      true,
      2.99,
    );
    this.addItem(
      'BLT',
      'Bacon with lettuce & tomato on whole wheat',
      false,
      2.99,
    );
    this.addItem(
      'Soup of the day',
      'Soup of the day, with a side of potato salad',
      false,
      3.29,
    );
    this.addItem(
      'Hotdog',
      'A hot dog, with saurkraut, relish, onions, topped with cheese',
      false,
      3.05,
    );
  }

  addItem(name: string, desc: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, desc, vegetarian, price);
    const len = this.menuItems.length;
    if (len >= this.MAX_ITEMS) {
      throw new Error('Sorry, menu is full! Can’t add item to menu');
    }
    this.menuItems.push(menuItem);
  }

  getMenuItems() {
    return this.menuItems;
  }
}
