"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const breakfast_menu_1 = require("./menus/breakfast-menu");
const lunch_menu_1 = require("./menus/lunch-menu");
const waitress_1 = require("./waitress");
class Main {
    static main() {
        const breakfastMenu = new breakfast_menu_1.BreakfastMenu();
        const lunchMenu = new lunch_menu_1.LunchMenu();
        const waitress = new waitress_1.Waitress(breakfastMenu, lunchMenu);
        waitress.printMenu();
    }
}
Main.main();
