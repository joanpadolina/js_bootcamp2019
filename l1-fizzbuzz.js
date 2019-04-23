
// Fizz Buzz deel 1

for (let number = 1; number < 100; number++) { // telt tot 100
  if (number % 3 == 0) {          // als het nummer deelbaar is door 3 en gelijk is aan null..
    console.log('fizz');          // ..print fizz dan ui
  } else if (number % 5 == 0) {
    console.log('buzz');
  } else {
    console.log(number);
  }
}

// Fizz Buzz deel 2

for (let number = 1; number < 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {     // logical or - is het deelbaar door 3 en 5..
    console.log('FIZZBUZZ');                    // ..print fizzbuzz
  } else if (number % 5 == 0) {
    console.log('buzz');
  } else if (number % 3 == 0) {
    console.log('fizz');
  } else {
    console.log(number);
  }
}
