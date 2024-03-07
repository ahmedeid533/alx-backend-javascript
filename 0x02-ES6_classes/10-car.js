export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const symbolKey = Symbol();
    const clonedCar = new super();
    Object.defineProperty(clonedCar, symbolKey, {
      value: true,
      enumerable: false,
      writable: false,
      configurable: false
    });
    return clonedCar;
  }
}
