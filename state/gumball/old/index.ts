class GumballMachine {
  static SOLD_OUT = 'SOLD_OUT';
  static NO_QUARTER = 'NO_QUARTER';
  static HAS_QUARTER = 'HAS_QUARTER';
  static SOLD = 'SOLD';

  state = GumballMachine.SOLD_OUT;

  constructor(public count: number) {
    if (count > 0) {
      this.state = GumballMachine.NO_QUARTER;
    }
  }

  insertQuarter() {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log('You can not insert another quarter');
    } else if (this.state === GumballMachine.NO_QUARTER) {
      this.state = GumballMachine.HAS_QUARTER;
      console.log('You inserted a quarter');
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('You can not insert a quarter, the machine is sold out');
    } else if (this.state === GumballMachine.SOLD) {
      console.log('Please wait, we are already giving you a gumball');
    }
  }

  ejectQuarter() {
    if (this.state === GumballMachine.HAS_QUARTER) {
      this.state = GumballMachine.NO_QUARTER;
      console.log('Quarter returned');
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log('You have not inserted a quarter');
    } else if (this.state === GumballMachine.SOLD) {
      console.log('Sorry, you already turned the crank');
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('You can not eject, you have not inserted a quater yet');
    }
  }

  turnCrank() {
    if (this.state === GumballMachine.HAS_QUARTER) {
      this.state = GumballMachine.SOLD;
      console.log('You turned...');
      this.dispense();
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log('You turned but there is no quarter');
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('You turned, but there are no gumballs');
    } else if (this.state === GumballMachine.SOLD) {
      console.log('Turning twice does not get you another gumball!');
    }
  }

  dispense() {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log('No gumball dispensed');
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log('You need to pay first');
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('No gumball dispensed');
    } else if (this.state === GumballMachine.SOLD) {
      console.log('A gumball comes rolling out the slot');
      this.count -= 1;
      if (this.count === 0) {
        console.log('Oops, out of gumballs!');
        this.state = GumballMachine.SOLD_OUT;
      } else {
        this.state = GumballMachine.NO_QUARTER;
      }
    }
  }

  toString() {
    console.log('\nMighty Gumball, Inc.');
    console.log('JS-enabled Standing Gumball Model #2004');
    console.log(`Inventory: ${this.count} gumballs`);
    console.log(`Machine is in ${this.state} state\n`);
  }
}

class Main {
  static main() {
    const gumballMachine = new GumballMachine(5);
    gumballMachine.toString();

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    gumballMachine.toString();

    gumballMachine.insertQuarter();
    gumballMachine.ejectQuarter();
    gumballMachine.turnCrank();

    gumballMachine.toString();

    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.ejectQuarter();

    gumballMachine.toString();

    gumballMachine.insertQuarter();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();
    gumballMachine.insertQuarter();
    gumballMachine.turnCrank();

    gumballMachine.toString();
  }
}

Main.main();
