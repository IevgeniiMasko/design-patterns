import {
  Amplifier,
  DVD,
  Light,
  Popper,
  Projector,
  ScreenTheather,
} from './sub_systems';

export class HomeTheatherFacade {
  protected popper = new Popper();
  protected light = new Light();
  protected screen = new ScreenTheather();
  protected projector = new Projector();
  protected amp = new Amplifier();
  protected dvd = new DVD();

  public watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.popper.on();
    this.popper.pop();
    this.light.dim(5);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDvd();
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  }

  public endMovie(): void {
    console.log('Shutting movie theater down...');
    this.popper.off();
    this.light.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }
}
