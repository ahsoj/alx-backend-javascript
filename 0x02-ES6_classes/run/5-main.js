import Building from '../5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding();
} catch (error) {
  console.log(error);
}
