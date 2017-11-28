var Park = function(){
  this.dinosaurs = [];
};

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },
  removeAll: function(type){
    var newDinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.type !== type);
    this.dinosaurs = newDinosaurs;
  },
  moreThanTwoOffspring: function(){
    var result = this.dinosaurs.filter(dinosaur => dinosaur.offspringCount > 2);
    return result;
  }
};

module.exports = Park;
