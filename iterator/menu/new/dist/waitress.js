"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Waitress = void 0;
class Waitress {
    constructor(breakfast, lunchMenu) {
        this.breakfast = breakfast;
        this.lunchMenu = lunchMenu;
    }
    printMenu() {
        const breakfastInterator = this.breakfast.createIterator();
        const lunchIteractor = this.lunchMenu.createIterator();
        console.log('MENU\n---\nBREAKFAST');
        this.printSpecificMenu(breakfastInterator);
        console.log('\nLUNCH');
        this.printSpecificMenu(lunchIteractor);
    }
    printSpecificMenu(interator) {
        while (interator.hasMore()) {
            const item = interator.next();
            console.log(`${item.getName()}, ${item.getPrice()} -- ${item.getDesc()}`);
        }
    }
}
exports.Waitress = Waitress;
