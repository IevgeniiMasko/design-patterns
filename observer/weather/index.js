"use strict";
class CurrentConditions {
    constructor(observable) {
        this.observable = observable;
        this.observable.registerObserver(this);
    }
    update(measurements) {
        this.measurements = measurements;
        this.display();
    }
    display() {
        const { temp, humidity, pressure } = this.measurements;
        console.log(`Current conditions -> temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}
class Statistics {
    constructor(observable) {
        this.observable = observable;
        this.observable.registerObserver(this);
    }
    update(measurements) {
        this.measurements = measurements;
        this.display();
    }
    display() {
        const { temp, humidity, pressure } = this.measurements;
        console.log(`Statistics -> temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}
class Forecast {
    constructor(observable) {
        this.observable = observable;
        this.observable.registerObserver(this);
    }
    update(measurements) {
        this.measurements = measurements;
        this.display();
    }
    display() {
        const { temp, humidity, pressure } = this.measurements;
        console.log(`Forecast -> temp: ${temp}, humidity: ${humidity}, pressure: ${pressure}`);
    }
}
class WeatherData {
    constructor() {
        this.observers = [];
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    notifyObservers() {
        this.observers.forEach((observer) => observer.update(this.measurements));
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(measurements) {
        this.measurements = measurements;
        this.measurementsChanged();
    }
}
class WeatherStation {
    main() {
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
