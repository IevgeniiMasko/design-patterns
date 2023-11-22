import {
  HasQuarterState,
  StateBase,
  NoQuarterState,
  SoldState,
  SoldoutState,
  WinnerState,
} from './states';

export class GumballMachine {
  NO_QUARTER: StateBase;
  HAS_QUARTER: StateBase;
  SOLD: StateBase;
  WINNER: StateBase;
  SOLD_OUT: StateBase;

  state: StateBase;

  constructor(protected count: number) {
    this.NO_QUARTER = new NoQuarterState(this);
    this.HAS_QUARTER = new HasQuarterState(this);
    this.SOLD = new SoldState(this);
    this.WINNER = new WinnerState(this);
    this.SOLD_OUT = new SoldoutState(this);

    if (count > 0) {
      this.state = this.NO_QUARTER;
    } else {
      this.state = this.SOLD_OUT;
    }
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  getCount() {
    return this.count;
  }

  setState(state: StateBase) {
    this.state = state;
  }

  releaseBall() {
    console.log('A gumball comes rolling out the slot...');

    if (this.count > 0) {
      this.count -= 1;
    }
  }

  toString() {
    console.log('\nMighty Gumball, Inc.');
    console.log('JS-enabled Standing Gumball Model #2004');
    console.log(`Inventory: ${this.count} gumballs`);
    console.log(`Machine is in ${this.state.getName()} state\n`);
  }
}
