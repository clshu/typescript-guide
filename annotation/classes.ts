class Vehicle {
  protected honk(): void {
    console.log('Honk');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
}
const car = new Car();

car.drive();
car.honk();