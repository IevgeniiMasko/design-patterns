import { GumballMachine } from './gumball-machine';

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
