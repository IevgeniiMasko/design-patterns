"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunchMenu = void 0;
const menu_item_1 = require("./menu-item");
class LunchMenu {
    constructor() {
        this.MAX_ITEMS = 6;
        this.menuItems = [];
        this.addItem('Vegetarian BLT', '(Fakin’) Bacon with lettuce & tomato on whole wheat', true, 2.99);
        this.addItem('BLT', 'Bacon with lettuce & tomato on whole wheat', false, 2.99);
        this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
        this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05);
    }
    addItem(name, desc, vegetarian, price) {
        const menuItem = new menu_item_1.MenuItem(name, desc, vegetarian, price);
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
exports.LunchMenu = LunchMenu;
