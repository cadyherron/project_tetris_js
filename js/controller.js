var controller = {

  currentPiece: null,
  direction: '',
  score: 0,


  init: function(){
    BoardModel.buildBoard();
    PieceModel.generatePiece();
    view.init();
    view.renderBoard();
    this.gameLoop();


    // rotations stuff:
    LShapedRight.rKeyListener();
    // LongShaped.lKeyListener();



    var t = TView
    t.renderEmpty('.l-shaped-right');
    t.renderEmpty('.l-shaped-left');
    t.renderEmpty('.square');
    t.renderEmpty('.long');
    t.renderEmpty('.s-shaped-right');
    t.renderEmpty('.s-shaped-left');
    t.renderPieces();
  },

  getBoard: function(){
    return BoardModel.boardArray;
  }, 

  gameLoop: function(){
    var that = this;
    setInterval(function(){
      PieceModel.movePiece(that.currentPiece);
      PieceModel.stopPiece();
      view.renderPiece(that.currentPiece);
      view.clearRows();
      view.showScore();
    }, 100);
  },

  moveSideways: function(){
    PieceModel.moveHorizontal();
    controller.direction = "";
  },

  stop: function() {
    view.stopPiece();
  }, 

  getFullDivs: function(){
    return view.getFullDivs();
  }



}