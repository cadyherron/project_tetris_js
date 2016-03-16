var controller = {

  currentPiece: null,
  direction: '',
  score: 0,

  // lShapedRight: LShapedRight(),


  init: function(){
    BoardModel.buildBoard();
    PieceModel.generatePiece();
    view.init();
    view.renderBoard();
    this.gameLoop();


    // rotations stuff:
    var lShapedRight = LShapedRight;
    LShapedRight.rKeyListener();
    var t = TView
    t.renderEmpty();
    t.renderPiece();
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