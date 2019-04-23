// Hoofdstuk 5
// Joan Padolina

// Flatten


let array = [[1, 2, 3], [4, 5], [6]];
let print = array.reduce(function(a, b){ // a = accumulator b = currentvalue
  return a.concat(b);   // geef het volgende terug : accumulator.concat(value)
});

console.log(print);
