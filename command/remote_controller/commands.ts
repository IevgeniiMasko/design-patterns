import { CeilingFan, Light, Stereo } from './receivers';

export interface Command {
  execute(): void;
  undo(): void;
}

export class NoCommand implements Command {
  execute(): void {
    console.log('Null execute command');
  }
  undo(): void {
    console.log('Null undo command');
  }
}

export class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}

export class CeilingFanOnCommand implements Command {
  constructor(private ceilingFan: CeilingFan) {}

  execute(): void {
    this.ceilingFan.high();
  }

  undo(): void {
    this.ceilingFan.low();
  }
}

export class CeilingFanOffCommand implements Command {
  constructor(private ceilingFan: CeilingFan) {}

  execute(): void {
    this.ceilingFan.low();
  }

  undo(): void {
    this.ceilingFan.high();
  }
}

export class StereoOnCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume();
  }

  undo(): void {
    this.stereo.off();
  }
}

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {}

  execute(): void {
    this.stereo.off();
  }

  undo(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume();
  }
}
