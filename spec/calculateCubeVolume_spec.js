import { calculateCubeVolume } from '../calculateCubeVolume.js'

//Write a program to *calculate* the **volume** of a **cube**. Start with a variable that contains the **length** of 1 edge in meters.

describe("A suite", function() {
    it("calculates volume of a 1 meter cube", function() {
      let volume = calculateCubeVolume(1);
      expect(volume).toBe(1);
    });
    it("calculates volume of a 2 meter cube", function() {
      let volume = calculateCubeVolume(2);
      expect(volume).toBe(8);
    });
  });
  
  