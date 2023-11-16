import { HomeTheatherFacade } from './facade';

class Main {
  public static main() {
    const homeTheather = new HomeTheatherFacade();
    homeTheather.watchMovie('Raiders of the Lost Ark');
    console.log('');
    homeTheather.endMovie();
  }
}

Main.main();
