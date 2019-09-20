const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help type inference when extracting values from the array
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent imcompatible values
carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2015-01-08');

