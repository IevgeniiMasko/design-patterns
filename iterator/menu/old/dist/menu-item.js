"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
class MenuItem {
    constructor(name, desc, vegetarian, price) {
        this.name = name;
        this.desc = desc;
        this.vegetarian = vegetarian;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getDesc() {
        return this.desc;
    }
    getPrice() {
        return this.price;
    }
    isVegetarian() {
        return this.vegetarian;
    }
}
exports.MenuItem = MenuItem;
