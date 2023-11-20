import { BreakfastMenu } from './menus/breakfast-menu';
import { LunchMenu } from './menus/lunch-menu';
import { Waitress } from './waitress';

class Main {
  public static main() {
    const breakfastMenu = new BreakfastMenu();
    const lunchMenu = new LunchMenu();
    const waitress = new Waitress(breakfastMenu, lunchMenu);

    waitress.printMenu();
  }
}

Main.main();
