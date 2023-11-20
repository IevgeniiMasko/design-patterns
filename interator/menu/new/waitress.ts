import { BreakfastMenu } from './breakfast-menu';
import { Iteractor } from './iterator';
import { LunchMenu } from './lunch-menu';
import { MenuItem } from './menu-item';

export class Waitress {
  constructor(public breakfast: BreakfastMenu, public lunchMenu: LunchMenu) {}

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
