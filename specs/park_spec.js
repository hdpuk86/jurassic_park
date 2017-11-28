var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('Park Tests', function(){
  beforeEach(function(){
    park = new Park();
    diplodocus = new Dinosaur('Diplodocus', 1);
    stegosaurus = new Dinosaur ('Stegosaurus', 2);
  });

  it('should start empty', function(){
    assert.strictEqual(park.dinosaurs.length, 0);
  });

  it('should add dinosaur', function(){
    park.addDinosaur(diplodocus);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should remove all dinosaurs of a type', function(){
    park.addDinosaur(stegosaurus);
    park.addDinosaur(diplodocus);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(diplodocus);
    park.removeAll("Stegosaurus");
    assert.strictEqual(park.dinosaurs.length, 2);
  });

  it('should get all dinosaurs with offspring count greater than 2', function(){
    var velociraptor = new Dinosaur('Velociraptor', 5);
    park.addDinosaur(velociraptor);
    park.addDinosaur(stegosaurus);
    park.addDinosaur(diplodocus);
    assert.deepStrictEqual(park.moreThanTwoOffspring(), [velociraptor]);
  });

});
