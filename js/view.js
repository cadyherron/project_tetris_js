var view = {

  init: function(piece){
    this.eventListeners();
  },

  renderBoard: function(){
    var board = controller.getBoard();

    for (var y = 0; y < board.length; y++) {
      $("#board").append('<div class="height row row'+ y + '"></div>');
      for(var x = 0; x < 10; x++){
        $('.row'+ y).append('<div class="col-xs-1" data-x='+ x +' data-y='+ y +' ></div>');
      }
    } 
    this.hideTopRows(); 
  },

  showScore: function() {
    $('.score').html("Score: "+controller.score)
  },

  hideTopRows: function() {
    $('.col-xs-1[data-y="0"]').hide()
    $('.col-xs-1[data-y="1"]').hide()
    $('.col-xs-1[data-y="2"]').hide()
    $('.col-xs-1[data-y="3"]').hide()
  },

  renderPiece: function(piece) {
    // set a class on the div that matches the piece's x and y coords
    var x = piece.x;
    var y = piece.y;

    // remove class from previous block, regardless of location
    $('.col-xs-1').removeClass('block');

    // add class to current block
    var divToAdd = $('[data-y=' + y + '][data-x=' + x + ']');
    $(divToAdd).addClass('block');
  },

  stopPiece: function() {
    var x = controller.currentPiece.x;
    var y = controller.currentPiece.y;

    var divToAdd = $('[data-y=' + y + '][data-x=' + x + ']');
    $(divToAdd).addClass('full');
  },


  eventListeners: function(){
    $(document).keyup(function(event){
      switch(event.which){
        //left
        case 37:
        controller.direction = 'left';
        
        break;

        //right
        case 39:
        controller.direction = 'right';
        break;

        default: return;
      }
      event.preventDefault();
      controller.moveSideways();
    }); 
  }, 

  getFullDivs: function(){
    return $('.full')
  },


  clearRows: function() {
    for (var i = 3; i < HEIGHT + HIDDEN_ROWS; i++) {
      if ($('.col-xs-1.full[data-y="'+i+'"]').length === 10) {
        console.log("clear row!")
        $('.col-xs-1[data-y="'+i+'"]').removeClass('full');
        // move all rows above you down by one
        this.moveAllRowsDown();
        // increase score
        controller.score += 40
      }
    }
  },


  moveAllRowsDown: function() {
    var oldCoords = [];

    $('.full').each(function(index) {
      oldCoords.push([$(this).data("x"), $(this).data("y")])
    })
    console.log(oldCoords);

    for (var i = 0; i < oldCoords.length; i++) {
      oldCoords[i][1] += 1
    }

    $('.full').removeClass('full')

    for (var i = 0; i < oldCoords.length; i++) {
      $('[data-x="'+oldCoords[i][0]+'"][data-y="'+oldCoords[i][1]+'"]').addClass('full')
    }

  }


}

