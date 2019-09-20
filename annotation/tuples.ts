const soda = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// Force the type in the right order
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];