"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakfastMenu = void 0;
const menu_item_1 = require("./menu-item");
class BreakfastMenu {
    constructor() {
        this.menuItems = new Map();
        this.addItem('K&B’s Pancake Breakfast', 'Pancakes with scrambled eggs, and toast', true, 2.99);
        this.addItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99);
        this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49);
        this.addItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59);
    }
    addItem(name, desc, vegetarian, price) {
        const menuItem = new menu_item_1.MenuItem(name, desc, vegetarian, price);
        const size = this.menuItems.size;
        this.menuItems.set(size, menuItem);
    }
    getMenuItems() {
        return this.menuItems;
    }
    createIterator() {
        return new BreakfastMenuIterator(this.menuItems);
    }
}
exports.BreakfastMenu = BreakfastMenu;
class BreakfastMenuIterator {
    constructor(items) {
        this.items = items;
        this.count = 0;
    }
    hasMore() {
        return !!this.items.get(this.count);
    }
    next() {
        const item = this.items.get(this.count);
        this.count += 1;
        return item;
    }
}
