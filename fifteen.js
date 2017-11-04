var div;

$(document).ready(function() {
  //add puzzlepiece to each div in the puzzle area
  var puzzlepiece = $('#puzzlearea div');
  puzzlepiece.addClass('puzzlepiece');


  var count = 0;
  for (var y = 0; y<4;y++){
    for (var x = 0; x<4; x++){
      puzzlepiece.eq(count).css({top:`${y*100}px`});
      puzzlepiece.eq(count).css({left: `${x*100}px`});
      puzzlepiece.eq(count).css({backgroundPosition: `${x*-100}px ${y*-100}px`})
      count++;
    }
  }
  count = 0

  puzzlepiece.on('mouseover',function(){
    var cPiece = $(this);//co-ordinate of puzzlepieces
    var cord_Piece = cPiece.offset();
    var cord_AllPieces = [];//creating an array of all co-ordinates
    for(var i = 0 ;i<15;i++){
      cord_AllPieces.push([puzzlepiece.eq(i).offset().left-483,puzzlepiece.eq(i).offset().top-89]);
    }
    /*adding the movablepiece class to each tile and animate their movements*/
    if(checkright(cord_Piece,cord_AllPieces) === false){ //used to check if the tile can be moved to the right
      cPiece.addClass("movablepiece");
      cPiece.on("click",function(){
            cPiece.animate({left:`${cord_Piece.left-483+100}px`},250);
            cPiece.animate({top:`${cord_Piece.top-89}px`},250);
              });
    }else if(checkleft(cord_Piece,cord_AllPieces) === false){
      cPiece.addClass("movablepiece");
      cPiece.on("click",function(){
            cPiece.animate({left:`${cord_Piece.left-483-100}px`},250);
            cPiece.animate({top:`${cord_Piece.top-89}px`},250);
              });
    }else if(checktop(cord_Piece,cord_AllPieces) === false){
      cPiece.addClass("movablepiece");
      cPiece.on("click",function(){
            cPiece.animate({left:`${cord_Piece.left-483}px`},250);
            cPiece.animate({top:`${cord_Piece.top-89+100}px`},250);
              });
    }else if(checkdown(cord_Piece,cord_AllPieces) === false){
      cPiece.addClass("movablepiece");
      cPiece.on("click",function(){
            cPiece.animate({left:`${cord_Piece.left-483}px`},250);
            cPiece.animate({top:`${cord_Piece.top-89-100}px`},250);
              });
    }

});
puzzlepiece.on('mouseout',function(){
  puzzlepiece.removeClass("movablepiece");//remove movablepiece class after the tile has being moved
});
/*randomly assign a value to each tile after the shuffle button is clicked*/

    $("#shufflebutton").on('click', function(){

      var ran ;
      var ranobj ;;
      var cord_ranobj;
      var cord_AllPieces;

      for(var t = 0;t<100;t++){//for loop to randomly shuffle the tiles when clicked

        ran = Math.floor(Math.random()*15);//creating a random object
        ranobj = puzzlepiece.eq(ran);//random object
        cord_ranobj = ranobj.offset();//array of each random object co-ordinate

        cord_AllPieces = [];//array containing the array of the co-ordinates of all puzzlepiece

        for(var i = 0 ;i<15;i++){
          cord_AllPieces.push([puzzlepiece.eq(i).offset().left-483,puzzlepiece.eq(i).offset().top-89]);//adding the offset position of each tile to the array containing the co-ordinates of each piece
        }

        if(checkright(cord_ranobj,cord_AllPieces) === false){
          ranobj.css({left:`${cord_ranobj.left-483+100}px`});
          ranobj.css({top:`${cord_ranobj.top-89}px`});
        }else if(checkleft(cord_ranobj,cord_AllPieces) === false){
          ranobj.css({left:`${cord_ranobj.left-483-100}px`});
          ranobj.css({top:`${cord_ranobj.top-89}px`});
        }else if(checktop(cord_ranobj,cord_AllPieces) === false){
          ranobj.css({left:`${cord_ranobj.left-483}px`});
          ranobj.css({top:`${cord_ranobj.top-89+100}px`});
        }else if(checkdown(cord_ranobj,cord_AllPieces) === false){
          ranobj.css({left:`${cord_ranobj.left-483}px`});
          ranobj.css({top:`${cord_ranobj.top-89-100}px`});
        }
    }
    });
/* check if the tiles can be moved in their respectable positions*/
    function checkright(x,x2){
      for(var i = 0 ;i<15;i++){
        if(((x.left-483+100) === x2[i][0] && (x.top-89) === x2[i][1] ) || (x.left-483+100)>=400 ){
            return true;
         }
       }
        return false;
   }

   function checkleft(x,x2){
     for(var i = 0 ;i<15;i++){
       if(((x.left-483-100) === x2[i][0] && (x.top-89) === x2[i][1] ) || (x.left-483-100)<0){
           return true;
        }
      }
       return false;
  }
  function checktop(x,x2){
    for(var i = 0 ;i<15;i++){
      if(((x.left-483) === x2[i][0] && (x.top-89+100) === x2[i][1] ) || (x.top-89+100)>=400 ){
          return true;
       }
     }
      return false;
  }

  function checkdown(x,x2){
   for(var i = 0 ;i<15;i++){
     if(((x.left-483) === x2[i][0] && (x.top-89-100) === x2[i][1] ) || (x.top-89-100)<0){
         return true;
      }
    }
     return false;
  }

  

});
