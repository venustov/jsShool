'use strict';

//можно было сделать проще, без использования стилей: использовать юникоды шахматных фигур

(function chessGenerate() {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
//вместо массива с буквами правильнее использовать String.fromCharCode(n) (погуглить таблица ascii)
  
  var table = document.createElement('table');
  table.className = "tableChess";

  document.body.appendChild(table);

  for (var i = 0; i <= 9; ++i) {

    var tr = document.createElement('tr');
    //      tr.id = i;
    table.appendChild(tr);

    for (var j = 0; j <= 9; ++j) {

      var td = document.createElement('td');
//сделать отдельно в другом цикле:
      td.className = ((i == 0 || i == 9) && (j == 0 || j == 9) ? 'corner' : i == 0 ? 'top' : i == 9 ? 'bottom' : j == 0 ? 'left' : j == 9 ? 'right' : ((i + j) % 2) ? 'black' : 'white');

      td.innerHTML = ((j == 0 || j == 9) && i != 0 && i != 9 ? (9 - i) : (i == 0 || i == 9) && j != 0 && j != 9 ? letters[j - 1].toUpperCase() : '');

      td.id = (j > 0) && (j < 9) ? letters[j - 1] + (9 - i) : 'side';

      tr.appendChild(td);
    }
  }
})();

function Piece(color, name) {
  this.color = color;
  this.name = name;
}

function arrangeThePiece(cell, piece, oldCell) {
  var div = document.createElement('div');
  div.className = piece.color + ' ' + piece.name;
  if (oldCell) {
    var elemRemove = document.getElementById(oldCell).firstChild;
    elemRemove.remove();
  }
  document.getElementById(cell).appendChild(div);
}

var pBlack = new Piece('black', 'pawn');
var rBlack = new Piece('black', 'rook');
var nBlack = new Piece('black', 'kNight');
var bBlack = new Piece('black', 'bishop');
var qBlack = new Piece('black', 'queen');
var kBlack = new Piece('black', 'king');

var pWhite = new Piece('white', 'pawn');
var rWhite = new Piece('white', 'rook');
var nWhite = new Piece('white', 'kNight');
var bWhite = new Piece('white', 'bishop');
var qWhite = new Piece('white', 'queen');
var kWhite = new Piece('white', 'king');

(function arrangePiecesStart() {

  arrangeThePiece('a8', rBlack);
  arrangeThePiece('b8', nBlack);
  arrangeThePiece('c8', bBlack);
  arrangeThePiece('d8', qBlack);
  arrangeThePiece('e8', kBlack);
  arrangeThePiece('f8', bBlack);
  arrangeThePiece('g8', nBlack);
  arrangeThePiece('h8', rBlack);

  arrangeThePiece('a7', pBlack);
  arrangeThePiece('b7', pBlack);
  arrangeThePiece('c7', pBlack);
  arrangeThePiece('d7', pBlack);
  arrangeThePiece('e7', pBlack);
  arrangeThePiece('f7', pBlack);
  arrangeThePiece('g7', pBlack);
  arrangeThePiece('h7', pBlack);

  arrangeThePiece('a1', rWhite);
  arrangeThePiece('b1', nWhite);
  arrangeThePiece('c1', bWhite);
  arrangeThePiece('d1', qWhite);
  arrangeThePiece('e1', kWhite);
  arrangeThePiece('f1', bWhite);
  arrangeThePiece('g1', nWhite);
  arrangeThePiece('h1', rWhite);

  arrangeThePiece('a2', pWhite);
  arrangeThePiece('b2', pWhite);
  arrangeThePiece('c2', pWhite);
  arrangeThePiece('d2', pWhite);
  arrangeThePiece('e2', pWhite);
  arrangeThePiece('f2', pWhite);
  arrangeThePiece('g2', pWhite);
  arrangeThePiece('h2', pWhite);

})();

setTimeout(arrangeThePiece, 3000, 'e4', pWhite, 'e2');
