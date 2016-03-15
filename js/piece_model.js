var PieceModel = {

  init: {},

  Piece: function(x, y){
    this.x = x;
    this.y = y;
  },

  generatePiece: function(){
    var x = Math.floor(Math.random()*4);
    var y = 3;

    
    return new this.Piece(x, y);
  }, 

  movePiece: function(pieceToMove){
    //var pieceToMove = this.generatePiece();
    if (pieceToMove.y < 23) {
      pieceToMove.y += 1;
    }
    console.log("piece's y: " + pieceToMove.y)
    console.log("piece's x: " + pieceToMove.x)
  }

}