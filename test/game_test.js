const expect = require('chai').expect;

describe('Game Instance Functions', function () {
  describe('checkGameStatus', function (){
    var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function () {
      var players = [
        {
          ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]]
            }
          ]
        }
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;

    });//pending test as it has no function with expectation/criteria. Can also put an x infront of a test to make it


  });
  xit('Something else to be tested', function (){

  });//can even put x in from of describe blocks to make all tests pending
});
