
// ChessBoard
// easy way

  const size = 8;

  let lineOdd = " # # # #\n";       // handmatig patroon
  let lineEven = "# # # # \n";

  let line = '';

  for(let i = 0; i < size / 2; i++){  // print het (16 gedeeld door 2) is 8x uit
    line = line + lineOdd + lineEven;
  }
console.log(line);

//Book way

const size2 = 8;

for (let firstLine = 0; firstLine < size2; firstLine++) {
  let line2 = '';
  let a = '';
  if (firstLine % 2 == 0) {
    a = ' ';
  } else {
    a = '#';
  }

  for (let b = 0; b < size2; b++) {
    line2 = line2 + a;
    if (a == ' ') {
      a = '#';
    } else {
      a = ' ';
    }
  }
  console.log(line2);
}
