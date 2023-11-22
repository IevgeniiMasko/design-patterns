import { GumballMachine } from '.';

export abstract class StateBase {
  abstract name: string;

  constructor(protected gumballMachine: GumballMachine) {}

  getName() {
    return this.name;
  }
  abstract insertQuarter(): void;
  abstract ejectQuarter(): void;
  abstract turnCrank(): void;
  abstract dispense(): void;
}

export class NoQuarterState extends StateBase {
  name = 'NO_QUARTER';

  insertQuarter(): void {
    console.log('You inserted a quarter');
    this.gumballMachine.setState(this.gumballMachine.HAS_QUARTER);
  }
  ejectQuarter(): void {
    console.log('You have not inserted a quarter');
  }
  turnCrank(): void {
    console.log('You turned but there is no quarter');
  }
  dispense(): void {
    console.log('You need to pay first');
  }
}

export class HasQuarterState extends StateBase {
  name = 'HAS_QUARTER';

  insertQuarter(): void {
    console.log('You can not insert another quarter');
  }
  ejectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.NO_QUARTER);
  }
  turnCrank(): void {
    console.log('You turned...');
    const winnerNumber = Math.round(Math.random() * 10);
    if (winnerNumber === 0) {
      this.gumballMachine.setState(this.gumballMachine.WINNER);
    } else {
      this.gumballMachine.setState(this.gumballMachine.SOLD);
    }
  }
  dispense(): void {
    console.log('No gumball dispensed');
  }
}

export class SoldState extends StateBase {
  name = 'SOLD';

  insertQuarter(): void {
    console.log('Please wait, we are already giving you a gumball');
  }
  ejectQuarter(): void {
    console.log('Sorry, you already turned the crank');
  }
  turnCrank(): void {
    console.log('Turning twice does not get you another gumball!');
  }
  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() === 0) {
      console.log('Oops, out of gumballs!');
      this.gumballMachine.setState(this.gumballMachine.SOLD_OUT);
    } else {
      this.gumballMachine.setState(this.gumballMachine.NO_QUARTER);
    }
  }
}

export class SoldoutState extends StateBase {
  name = 'SOLD_OUT';
  insertQuarter(): void {
    console.log('You can not insert a quarter, the machine is sold out');
  }
  ejectQuarter(): void {
    console.log('You can not eject, you have not inserted a quater yet');
  }
  turnCrank(): void {
    console.log('You turned, but there are no gumballs');
  }
  dispense(): void {
    console.log('No gumball dispensed');
  }
}

export class WinnerState extends StateBase {
  name = 'WINNER';

  insertQuarter(): void {
    console.log('Please wait, we are already giving you a gumball');
  }
  ejectQuarter(): void {
    console.log('Sorry, you already turned the crank');
  }
  turnCrank(): void {
    console.log('Turning twice does not get you another gumball!');
  }
  dispense(): void {
    console.log('YOU ARE A WINNER! You get two gumballs for your quarter');
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() === 0) {
      console.log('Oops, out of gumballs!');
      this.gumballMachine.setState(this.gumballMachine.SOLD_OUT);
    } else {
      this.gumballMachine.releaseBall();
      if (this.gumballMachine.getCount() === 0) {
        console.log('Oops, out of gumballs!');
        this.gumballMachine.setState(this.gumballMachine.SOLD_OUT);
      } else {
        this.gumballMachine.setState(this.gumballMachine.NO_QUARTER);
      }
    }
  }
}
