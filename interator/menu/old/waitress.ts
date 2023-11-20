import { BreakfastMenu } from './breakfast-menu';
import { LunchMenu } from './lunch-menu';
import { MenuItem } from './menu-item';

export class Waitress {
  constructor(public breakfast: BreakfastMenu, public lunchMenu: LunchMenu) {}

  public printMenu() {
    const breakfastItems = this.breakfast.getMenuItems();
    const lunchItems = this.lunchMenu.getMenuItems();

    console.log('MENU\n---\nBREAKFAST');
    for (let i = 0; i < breakfastItems.size; i++) {
      const item = breakfastItems.get(i) as MenuItem;
      console.log(`${item.getName()}, ${item.getPrice()} -- ${item.getDesc()}`);
    }
    console.log('\nLUNCH');
    for (let i = 0; i < lunchItems.length; i++) {
      const item = lunchItems[i] as MenuItem;
      console.log(`${item.getName()}, ${item.getPrice()} -- ${item.getDesc()}`);
    }
  }
}
