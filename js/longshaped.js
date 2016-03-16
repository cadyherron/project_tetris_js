var LongShaped = (function() {

  var rotations = 0;

  var transformations = {
    0: [[0,0],
        [1,0],
        [2,0],
        [3,0]],
    1: [[3,0],
        [3,1],
        [3,2],
        [3,3]],
    2: [[0,0],
        [0,1],
        [0,2],
        [0,3]],
    3: [[0,3],
        [1,3],
        [2,3],
        [3,3]]   
  }


  var lKeyListener = function(){
    $(document).keyup(function(event){
      if (event.which === 76 && longShaped.rotations < 3) {
        console.log("l key!")
        longShaped.rotations += 1;
      } else if (event.which === 76) {
        console.log("reset rotations?")
        longShaped.rotations = 0;
      }
    TView.renderPieces();
    })    
  }

  return {
    transformations: transformations,
    lKeyListener: lKeyListener,
    rotations: rotations
  }


})();


var longShaped = LongShaped;
longShaped.lKeyListener();