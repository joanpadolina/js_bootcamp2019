

// Sum of range

function range(start, end) { // parameters bij de value
  let array = [];
  let r = 0;
  for (let i = start; i <= end; i++) {  // index loop van start tot en met end + 1 erbij
    array [r] = i;        // de array krijgt de inhoud van loop
    r = r + 1;            // de r doet er steeds 1 erbij op de loop
  }
  return array;
}
console.log(range(1, 10));
console.log(range(2, 20));

function sum(add){    // toevoegen van de vorige cijfer in de range
  let first = 0;

  for (let i = 0; i < add.length; i++){ // i is kleiner dan de parameter en pakt de lengte ervan
    first = first + add[i];             // hier voegt de loop .lenght  toe aan de sum

  }
  return first ;
}
 console.log(sum(range(1, 10)));
