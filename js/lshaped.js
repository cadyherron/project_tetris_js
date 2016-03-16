var LShapedRight = (function() {

  var height = 2;
  var width = 3;
  var rotations = 0;

  var transformations = {
    0: [[0,2],
        [1,2],
        [2,1],
        [2,2]],
    1: [[1,0],
        [2,0],
        [2,1],
        [2,2]],
    2: [[0,0],
        [0,1],
        [1,0],
        [2,0]],
    3: [[0,0],
        [0,1],
        [0,2],
        [1,2]]             
  };



  var rKeyListener = function(){
    $(document).keyup(function(event){
      if (event.which === 82 && lshaped.rotations < 3) {
        lshaped.rotations += 1;
      } else if (event.which === 82) {
        lshaped.rotations = 0;
      }
    TView.renderPiece();
    })    
  }


  return {
    transformations: transformations,
    rKeyListener: rKeyListener,
    rotations: rotations
  }

})();

var lshaped = LShapedRight;
