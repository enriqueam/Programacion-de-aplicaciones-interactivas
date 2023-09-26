/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F de Sande
 * @since Mar 14, 2023
 * @description Program to manage different kinds of vehicles
 *
 */

/** @description Represents any vehicle that can drive */
interface Vehicle {
  drive(): string;
}

/** @description Represents any vehicle that can fly */
interface FlyingVehicle {
  fly(): string;
}

/**
 * @description A futuristic car will be able to fly
 * @implements Vehicle
 */
class AdvancedCar implements Vehicle, FlyingVehicle {
  public drive (): string {
    return 'Driving Car.';
  }
  public fly() {
    return 'Flying Car.';
  }
}

/**
 * @description A car is a vehicle that can drive
 * @implements Vehicle
 */
class Car implements Vehicle {
  public drive (): string {
    return 'Driving Car.';
  }
}

/**
 * @description An airplane is a vehicle that can fly
 * @implements Vehicle
 */
class Airplane implements FlyingVehicle {
  public fly() {
    return 'Flying Airplane.';
  }
}

export function main(): void { 
  const advancedCar: Vehicle & FlyingVehicle = new AdvancedCar();
  console.log(advancedCar.drive());
  console.log(advancedCar.fly());

  const car: Vehicle = new Car();
  console.log(car.drive());
  // console.log(car.fly());

  const airplane: FlyingVehicle = new Airplane();
  // console.log(airplane.drive());
  console.log(airplane.fly());
}

main();