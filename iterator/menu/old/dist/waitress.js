"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waitress = void 0;
class Waitress {
    constructor(breakfast, lunchMenu) {
        this.breakfast = breakfast;
        this.lunchMenu = lunchMenu;
    }
    printMenu() {
        const breakfastItems = this.breakfast.getMenuItems();
        const lunchItems = this.lunchMenu.getMenuItems();
        console.log('MENU\n---\nBREAKFAST');
        for (let i = 0; i < breakfastItems.size; i++) {
            const item = breakfastItems.get(i);
            console.log(`${item.getName()}, ${item.getPrice()} -- ${item.getDesc()}`);
        }
        console.log('\nLUNCH');
        for (let i = 0; i < lunchItems.length; i++) {
            const item = lunchItems[i];
            console.log(`${item.getName()}, ${item.getPrice()} -- ${item.getDesc()}`);
        }
    }
}
exports.Waitress = Waitress;
