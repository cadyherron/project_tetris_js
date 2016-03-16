var TView = (function() {

  var height = 4;
  var width = 4;

  var renderEmpty = function(cssClass) {
    var element = $('.transformations > '+cssClass)

    for (var y = 0; y < height; y++) {
      $(element).append('<div class="row row'+y+'"></div>');
      for (var x = 0; x < width; x++) {
        $(cssClass + '> .row'+ y).append('<div class="col-xs-4" data-x='+ x +' data-y='+ y +' ></div>');
      }

    }
  }


  var renderPieces = function() {
    // lshaped right
    var orientation = lshaped.transformations[lshaped.rotations]
    $('.l-shaped-right > .row > .col-xs-4').css("background-color", "gray")
    for (var i = 0; i < orientation.length; i++) {
      $('.l-shaped-right > .row'+orientation[i][1]+'> [data-x="'+orientation[i][0]+'"][data-y="'+orientation[i][1]+'"]').css("background-color", "green")
    }

    // long shaped
    var orientation2 = longShaped.transformations[longShaped.rotations]
    $('.long > .row > .col-xs-4').css("background-color", "gray")
    for (var i = 0; i < orientation2.length; i++) {
      $('.long > .row'+orientation2[i][1]+'> [data-x="'+orientation2[i][0]+'"][data-y="'+orientation2[i][1]+'"]').css("background-color", "pink")
    }



  }


  return {
    renderEmpty: renderEmpty,
    renderPieces: renderPieces
  }


  // press L to rotate
  // increase transformations[i] by one, unless it's 3, then reset to 0




})();