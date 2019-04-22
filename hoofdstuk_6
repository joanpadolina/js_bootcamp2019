// Hoofdstuk 6
// A vector Type
// Joan Padolina

class Vec { // maakt een nieuwe class aan
  constructor(x, y){ // de constructor bevat een x, y parameter
    this.x = x; // hier geef ik de this de waarde x
    this.y = y;
  }

  plus(vector){ // methode met een parameter
    let somx = this.x + vector.x ; // somx voegt x + y
    let somy = this.y + vector.y;
    return new Vec(somx, somy); //geeft een nieuwe return `Vec aan `
  }
  minus(vector){
    let versx = this.x - vector.x; // x-y neemt de verschillen
    let versy = this.y - vector.y;
    return new Vec(versx, versy);
  }
  get length(){
    let pyth = Math.sqrt((this.x * this.x) + (this.y * this.y)); // de stelling van pythagoras = a^{2}+b^{2}=c^{2}
    return pyth;
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
