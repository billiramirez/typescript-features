const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inferences when extracting values.
const car = carMakers[0];
const myCar = carMakers.pop();
// Prevent imcompatible values
carMakers.push(100); // this will trigger an error

// help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types

const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-19-100");
importantDates.push(new Date());
importantDates.push(1); // this will trigger an error
