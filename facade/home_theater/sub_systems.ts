export class Popper {
  on() {
    console.log('Popcorn Popper on');
  }
  off() {
    console.log('Popcorn Popper off');
  }
  pop() {
    console.log('Popcorn Popper popping popcorn!');
  }
}
export class Light {
  dim(num: number) {
    console.log(`Theater Ceiling Lights dimming to ${num}%`);
  }
  on() {
    console.log('Theater Ceiling Lights on');
  }
}
export class ScreenTheather {
  up() {
    console.log('Theater Screen going up');
  }
  down() {
    console.log('Theater Screen going down');
  }
}
export class Projector {
  on() {
    console.log('Top-O-Line Projector on');
  }
  wideScreenMode() {
    console.log('Top-O-Line Projector in widescreen mode (16x9 aspect ratio)');
  }
  off() {
    console.log('Top-O-Line Projector off');
  }
}
export class Amplifier {
  on() {
    console.log('Top-O-Line Amplifier on');
  }
  setDvd() {
    console.log(
      'Top-O-Line Amplifier setting DVD player to Top-O-Line DVD Player',
    );
  }
  setSurroundSound() {
    console.log(
      'Top-O-Line Amplifier surround sound on (5 speakers, 1 subwoofer)',
    );
  }
  setVolume(num: number) {
    console.log(`Top-O-Line Amplifier setting volume to ${num}`);
  }
  off() {
    console.log('Top-O-Line Amplifier off');
  }
}
export class DVD {
  on() {
    console.log('Top-O-Line DVD Player on');
  }
  play(movie: string) {
    console.log(`Top-O-Line DVD Player playing “${movie}”`);
  }
  stop() {
    console.log(`Top-O-Line DVD Player stopped`);
  }
  eject() {
    console.log('Top-O-Line DVD Player eject');
  }
  off() {
    console.log('Top-O-Line DVD Player off');
  }
}
