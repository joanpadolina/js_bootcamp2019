
//Beancounting

function countBs(string){
 let count = 0;
  for (let i = count = 0; i < string.length; i++){    // pakt de lengte van de string en voegt er 1 bij
    if (string[i] === 'B'){                           // is gelijk aan de hoofdletter B
      count = count + 1;
    }
  }
  return count;
}
console.log(countBs('BBBBB'));

// Beancounting random letters

function countChar(string2, char){    //parameter char
 let count = 0;
  for (let i = count = 0; i < string2.length; i++){
    if (string2[i] === char){         // telt aantal karaters in de string
      count = count + 1;
    }
  }
  return count;
}

console.log(countChar('Hallelujaa','l'));
