interface Weapon {
  use(): void;
}

class Sword implements Weapon {
  use(): void {
    console.log('Sword is in use');
  }
}
class Bow implements Weapon {
  use(): void {
    console.log('Bow is in use');
  }
}
class Knife implements Weapon {
  use(): void {
    console.log('Knife is in use');
  }
}
class Axe implements Weapon {
  use(): void {
    console.log('Axe is in use');
  }
}

class Character {
  protected character = 'character';
  protected weapon = new Sword();

  public changeWeapon(w: Weapon) {
    this.weapon = w;
  }

  public fight() {
    this.weapon.use();
  }

  public display() {
    console.log(`This is a ${this.character}`);
  }
}

class Knight extends Character {
  protected override character = 'knigth';
  protected override weapon = new Knife();
}
class Troll extends Character {
  protected override character = 'troll';
  protected override weapon = new Bow();
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
