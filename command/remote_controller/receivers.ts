export class Light {
  on() {
    console.log('Light on');
  }
  off() {
    console.log('Light off');
  }
}

export class CeilingFan {
  high() {
    console.log('CeilingFan high');
  }
  medium() {
    console.log('CeilingFan medium');
  }
  low() {
    console.log('CeilingFan low');
  }
  off() {
    console.log('CeilingFan off');
  }
  getSpeed() {
    console.log('CeilingFan getSpeed');
  }
}

export class GarageDoor {
  up() {
    console.log('GarageDoor up');
  }
  down() {
    console.log('GarageDoor down');
  }
  stop() {
    console.log('GarageDoor stop');
  }
  lightOn() {
    console.log('GarageDoor lightOn');
  }
  lightOff() {
    console.log('GarageDoor lightOff');
  }
}

export class Stereo {
  on() {
    console.log('Stereo on');
  }
  off() {
    console.log('Stereo off');
  }
  setCd() {
    console.log('Stereo setCd');
  }
  setDvd() {
    console.log('Stereo setDvd');
  }
  setRadio() {
    console.log('Stereo setRadio');
  }
  setVolume() {
    console.log('Stereo setVolume');
  }
}
