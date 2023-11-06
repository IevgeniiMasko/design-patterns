type Measurements = {
  temp: number;
  humidity: number;
  pressure: number;
};

interface Observer {
  update(m: Measurements): void;
}

interface Display {
  display(): void;
}

interface Observable {
  registerObserver(o: Observer): void;
  notifyObservers(): void;
}

class CurrentConditions implements Observer, Display {
  private measurements: Measurements;
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.registerObserver(this);
  }

  update(measurements: Measurements): void {
    this.measurements = measurements;
    this.display();
  }

  display(): void {
    const { temp, humidity, pressure } = this.measurements;
    console.log(
      `Current conditions -> temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`,
    );
  }
}
class Statistics implements Observer {
  private measurements: Measurements;
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.registerObserver(this);
  }

  update(measurements: Measurements): void {
    this.measurements = measurements;
    this.display();
  }

  display(): void {
    const { temp, humidity, pressure } = this.measurements;
    console.log(
      `Statistics -> temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`,
    );
  }
}
class Forecast implements Observer {
  private measurements: Measurements;
  private observable: Observable;

  constructor(observable: Observable) {
    this.observable = observable;
    this.observable.registerObserver(this);
  }

  update(measurements: Measurements): void {
    this.measurements = measurements;
    this.display();
  }

  display(): void {
    const { temp, humidity, pressure } = this.measurements;
    console.log(
      `Forecast -> temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`,
    );
  }
}

class WeatherData implements Observable {
  private observers: Observer[];
  private measurements: Measurements;

  constructor() {
    this.observers = [];
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.measurements));
  }

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(measurements: Measurements) {
    this.measurements = measurements;
    this.measurementsChanged();
  }
}

class WeatherStation {
  public main() {
    const weatherData = new WeatherData();

    const currentConditions = new CurrentConditions(weatherData);
    const statistics = new Statistics(weatherData);
    const forecast = new Forecast(weatherData);

    weatherData.setMeasurements({
      temp: 1,
      pressure: 2,
      humidity: 3,
    });
    weatherData.setMeasurements({
      temp: 11,
      pressure: 22,
      humidity: 33,
    });
  }
}

new WeatherStation().main();
