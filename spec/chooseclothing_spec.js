import { chooseClothing } from '../chooseClothing.js'

//Take a variable with the temperature and another variable with the relative humidity and output a clothing suggestion.

describe("A suite", function() {
    it("chooses clothing for a hot and humid day", function() {
      let sClothing = chooseClothing(28, 80);
      expect(sClothing).toBe("shorts, t-shirt, birkenstocks");
    });
  it("chooses clothing for a cold and snowy day", function() {
    let sClothing = chooseClothing(-3, 100);
    expect(sClothing).toBe("toque, boots, heavy coat");
  });
  it("chooses clothing for a lovely spring day", function() {
    let sClothing = chooseClothing(14, 35);
    expect(sClothing).toBe("long pants, running shoes, hoodie");
  });
});
  
  