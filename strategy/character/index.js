"use strict";
class Sword {
    use() {
        console.log('Sword is in use');
    }
}
class Bow {
    use() {
        console.log('Bow is in use');
    }
}
class Knife {
    use() {
        console.log('Knife is in use');
    }
}
class Axe {
    use() {
        console.log('Axe is in use');
    }
}
class Character {
    constructor() {
        this.character = 'character';
        this.weapon = new Sword();
    }
    changeWeapon(w) {
        this.weapon = w;
    }
    fight() {
        this.weapon.use();
    }
    display() {
        console.log(`This is a ${this.character}`);
    }
}
class Knight extends Character {
    constructor() {
        super(...arguments);
        this.character = 'knigth';
        this.weapon = new Knife();
    }
}
class Troll extends Character {
    constructor() {
        super(...arguments);
        this.character = 'troll';
        this.weapon = new Bow();
    }
}
const knight = new Knight();
knight.display();
knight.fight();
knight.changeWeapon(new Sword());
knight.fight();
const troll = new Troll();
troll.display();
troll.fight();
troll.changeWeapon(new Axe());
troll.fight();
