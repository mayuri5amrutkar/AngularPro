export class Recipe {
  public ratings : boolean;
  constructor(public name, public description, public offerdate, public offerexpirydate, public price, public imagePath, ratings) {}
}
