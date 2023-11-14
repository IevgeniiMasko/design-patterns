import { Command, NoCommand } from './commands';

export class RemoteController {
  private onCommands: Command[];
  private offCommands: Command[];
  private history: Command[];

  constructor() {
    this.onCommands = new Array(7).fill(new NoCommand());
    this.offCommands = new Array(7).fill(new NoCommand());
    this.history = [];
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  pressOnButton(slot: number) {
    this.onCommands[slot].execute();
    this.history.push(this.onCommands[slot]);
  }

  pressOffButton(slot: number) {
    this.offCommands[slot].execute();
    this.history.push(this.offCommands[slot]);
  }

  pressUndoButton() {
    const command = this.history.pop();
    command?.undo();
  }
}
