import {
  LightOffCommand,
  LightOnCommand,
  StereoOffCommand,
  StereoOnCommand,
} from './commands';
import { Light, Stereo } from './receivers';
import { RemoteController } from './remote_controller';

class Main {
  static main() {
    const remoteController = new RemoteController();

    const light = new Light();
    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    const stereo = new Stereo();
    const stereoOnCommand = new StereoOnCommand(stereo);
    const stereoOffCommand = new StereoOffCommand(stereo);

    remoteController.setCommand(0, lightOnCommand, lightOffCommand);
    remoteController.setCommand(1, stereoOnCommand, stereoOffCommand);

    console.log('----light----');
    remoteController.pressOnButton(0);
    // remoteController.pressOffButton(0);

    console.log('----stereo----');
    remoteController.pressOnButton(1);
    // remoteController.pressOffButton(1);

    console.log('----undo----');
    remoteController.pressUndoButton();
    remoteController.pressUndoButton();

    console.log('----null----');
    remoteController.pressOnButton(6);
    remoteController.pressOffButton(6);
  }
}

Main.main();
