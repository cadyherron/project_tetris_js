var TView = (function() {

  var height = 3;
  var width = 3;

  var renderEmpty = function() {
    var element = $('.transformations > .l-shaped-right')
    var divsToAppend = [];

    for (var y = 0; y < height; y++) {
      $(element).append('<div class="row row'+y+'"></div>');
      for (var x = 0; x < width; x++) {
        $('.row'+ y).append('<div class="col-xs-4" data-x='+ x +' data-y='+ y +' ></div>');
      }

    }
  }


  var renderPiece = function() {
    var piece = LShapedRight;
    var orientation = piece.transformations[piece.rotations]

    for (var i = 0; i < orientation.length; i++) {
      console.log(orientation[i])
      console.log("identifier: "+'.l-shaped-right > .row'+orientation[i][1]+'> [data-x="'+orientation[i][0]+'"][data-y="'+orientation[i][1]+'"]')
      $('.l-shaped-right > .row'+orientation[i][1]+'> [data-x="'+orientation[i][0]+'"][data-y="'+orientation[i][1]+'"]').css("background-color", "green")
    }
  }


  return {
    renderEmpty: renderEmpty,
    renderPiece: renderPiece
  }


  // press L to rotate
  // increase transformations[i] by one, unless it's 3, then reset to 0




})();