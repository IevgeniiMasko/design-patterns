import { IMenu, Iteractor } from './menus/interfaces';
import { MenuItem } from './menus/menu-item';

export class Waitress {
  constructor(public breakfast: IMenu, public lunchMenu: IMenu) {}

  public printMenu() {
    const breakfastInterator = this.breakfast.createIterator();
    const lunchIteractor = this.lunchMenu.createIterator();

    console.log('MENU\n---\nBREAKFAST');
    this.printSpecificMenu(breakfastInterator);
    console.log('\nLUNCH');
    this.printSpecificMenu(lunchIteractor);
  }

  private printSpecificMenu(interator: Iteractor<MenuItem>) {
    while (interator.hasMore()) {
      const item = interator.next() as MenuItem;
      console.log(`${item.getName()}, ${item.getPrice()} -- ${item.getDesc()}`);
    }
  }
}
