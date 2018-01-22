var expect = require('chai').expect;

describe('checkForShip', function() {
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinate', function (){
    player = {ships:[{locations: [[0,0]]}]};
    expect(checkForShip(player, [9,9])).to.be.false;
  });

  it('should correctly report a ship at a given players coordinate', function (){
    player = {ships:[{locations: [[5,0]]}]};
    expect(checkForShip(player, [5,0])).to.be.true;
  });

  it('should correctly report a ships for a given player with multiple coordinates', function (){
    player = {ships:[
      {
        locations: [[5,0],[5,1]]
      }
    ]};

    expect(checkForShip(player, [5,0])).to.be.true;
    expect(checkForShip(player, [5,1])).to.be.true;
    expect(checkForShip(player, [9,9])).to.be.false;
  });

  it('should correctly report multiple ships for a given player with multiple coordinates', function (){
    player = {ships:[
      {
        locations: [[5,0],[5,1]]
      },
      {
        locations: [[3,5],[2,5]]
      }
    ]};
    expect(checkForShip(player, [3,5])).to.be.true;
    expect(checkForShip(player, [2,5])).to.be.true;
    expect(checkForShip(player, [5,0])).to.be.true;
    expect(checkForShip(player, [5,1])).to.be.true;
    expect(checkForShip(player, [9,9])).to.be.false;
  });
});
