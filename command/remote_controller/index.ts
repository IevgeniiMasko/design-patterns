import {
  LightOffCommand,
  LightOnCommand,
  StereoOffCommand,
  StereoOnCommand,
} from './commands';
import { Light, Stereo } from './receivers';
import { RemoteController } from './remote_controller';

// client: main
// -- desc: creates and configures concrete command objects. It passes the request parameters, including a receiver instance, into the command’s constructor.
// -- desc: after that, the resulting command may be associated with one or multiple senders
// receivers: light, stereo, etc
// -- desc: contains some business logic. Only handles how a request is passed to the receiver, while the receiver itself does the actual work.
// commands: lightOnCommand, lightOffCommand etc
// -- desc: not supposed to perform the work on its own, but rather to pass the call to one of the business logic objects (receiver).
// sender/invoker: remoteController
// -- desc: responsible for initiating requests. This class must have a field for storing a reference to a command object

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
