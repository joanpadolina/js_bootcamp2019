_Eloquent Javascript
Samenvatting
Joan Padolina_

# Hoofdstuk 1 Values, Types, and Operators


**Variabelen**:
Hier wordt alle inhoud opgeslagen om later gebruikt te worden.

**Array**: [  ]
een groep obejecten

Sum **of** range:
1, 10

1+2+3+4….+10=55


**Null**:
heeft geen waarde is aan gemaakt maar niet aangeroepen. Has no properties

**Undefined**:
is aan gemaakt maar niet aangeroepen. Als iets niks is.

###Arithmetic
Gebruik de operator om verschillende rekensommen te schrijven

100 + 4 * 11

**Operators**
+ optellen
- aftrekken
* vermenigvuldigen
/ delen
% restbewerking

**Special** numbers
Speciale waarden waarbij een nummer niet als een nummer gedraagt.

Infinity ( positief)
-Infinity (negatief)
NAN   (geen nummer)

**Strings**
Strings zijn teksten binnen de quote tekens “” ‘’. Je kan elke quote gebruike mits je consistent blijft in de code.
\  - de backlash in een string geeft de letter erna een speciale betekenis. Zo kan \n gebruiken op een enter toe te voegen.

**Unary** Operator
Operators kunnen ook in woorden voorkomen bijv.

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
Boolean values
Geeft de waardes True or False
Comparison
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
> Groter dan
< Kleiner dan
<= Kleiner of gelijk aan
>= Groter of gelijk aan
==  Gelijk aan
!= Niet gelijk aan
Logical Operators
&& And
|| Or
& Not
Empty values
Chapter 4
Chapter 5

“ Er zijn twee manieren om een constructie te maken van een software ontwerp; 1 Maak het simpel en duidelijk zonder tekortkoming. 2 maak het zo moeilijk zonder duidelijk tekortkoming.”

Complexe codes zorgt voor verwarring voor de programmeur.

Langere codes (loops) kan voor bugs zorgen omdat het met woorden wordt behandeld. Als je korte code schrijft zoals;
console.log(sum(range(1, 10)));

Geeft het een uitkomst die daadwerkelijk met sum en range te maken heeft. Het loopt nogsteeds maar kan minders bugs bevatten.

Code die wel een bug kan hebben ziet er zo uit

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
**Abstraction**
Verbergt details en geeft ons de mogelijkheid om over de problemen te praten op een hoger en abstracte manier.

Om meer abstraction te kunnen coderen moet je bepaalde termen kennen om sneller begrip te hebben. Het maken van een code kan uitgebreid met veel uitleg maar het kan ook veel korter met meer termen die je moet kennen. Maar dit kan problematisch zijn als je geen één woord kent.

**Abstraction** en repetition
Vlakke functies zijn goede abstracties maar soms vallen ze te kort.
Het is normaal om voor een programma een paar keer iets te laten doen zoals een Loop.
Vb:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

Hoe kan je ervoor zorgen dat de loop als een function reageert en “Iets N” een paar keer doet? Geef  een parameter bij de variabel:

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
Het volgende log je de nummers door de functie value als actie te loggen. :
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2
Het is niet nodig om voorgedefinieerde functie te herhalen. Het is makkelijker om de functie een waarde ter plaatse te geven.
=>. an arrow function ECMAscript 6

Voorbeeld:

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5”]
Deze code lijkt op een for loop. Het beschrijft een loop en daar komt de body. Maar de body is geschreven als een functie waarde en zit tussen de haakjes voor de herhaling.

Higher-order functions
In wiskunde is een functie bedacht die opereren in functies door als argumenten te nemen of terug te doen (return).
Hierdoor worden de acties abstracter en zijn niet alleen waardes.
Voorbeeld:
Functies maakt nieuwe functies
Functie dat andere functies veranderd
Functie die de control vloei veranderd


function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true


Script **data** set
Data processing is waar higher-order data schijnt. Het processen van data bevat echt data.
Unicode heeft 140 script
81 wordt nogsteeds gebruikt
En 59 is historisch

**Filtering** arrays
Om te zien welke data nog gebruikt worden schrijf je de volgende script die het test op:

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

Verkorte versie:

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", …}, …]


**Transforming** with map

Inspecteren van namen binnen een array.
De .map method transformeer de array door er een functie van te maken. En geeft dan de returned values.


**Summerizing** with reduce
Reduce zit in een array en heeft 2 argumenten: 1 functie 2 is de waarde

Reduce krijgt 4 argumenten
1. Accumulator
2. CurrentValue
3. CurrentIndex
4. Array

Let total = [0, 1, 2, 3, 4].reduce(function(sum, value){
Return sum + value;}, 0);


**JSON**

Javascript Object Notation
Hier worden de data opgeslagen voor communicatie
