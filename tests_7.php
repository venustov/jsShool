<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>

<style>
  .tableChess {
    border: 2px solid gray;
    border-spacing: 0;
    border-radius: 8px;
  }

  td.black {
    width: 36px;
    height: 36px;
    background: gray;
    text-align: center;
  }

  td.white {
    width: 36px;
    height: 36px;
    background: #d6e9c6;
    text-align: center;
  }

  .corner {
    width: 18px;
    height: 18px;
  }

  .left {
    width: 18px;
    height: 36px;
    text-align: center;
  }

  .right {
    width: 18px;
    height: 36px;
    text-align: center;
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .top {
    width: 36px;
    height: 18px;
    text-align: center;
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .bottom {
    width: 36px;
    height: 18px;
    text-align: center;
  }

  div.white {
    color: white;
    text-shadow: 1px 1px 2px black, 0 0 1em black;
    font-size: 20px;
  }

  div.black {
    text-shadow: 1px 1px 2px white, 0 0 1em white;
    font-size: 20px;
  }
  
</style>

<body>
  <h3>Шахматная доска:</h3>
</body>

<script>
  function chessGenerate() {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    var table = document.createElement('table');
    table.className = "tableChess";

    document.body.appendChild(table);

    for (i = 0; i <= 9; ++i) {

      var tr = document.createElement('tr');
      //      tr.id = i;
      table.appendChild(tr);

      for (j = 0; j <= 9; ++j) {

        var td = document.createElement('td');

        td.className = ((i == 0 || i == 9) && (j == 0 || j == 9) ? 'corner' : i == 0 ? 'top' : i == 9 ? 'bottom' : j == 0 ? 'left' : j == 9 ? 'right' : ((i + j) % 2) ? 'black' : 'white');

        td.innerHTML = ((j == 0 || j == 9) && i != 0 && i != 9 ? (9 - i) : (i == 0 || i == 9) && j != 0 && j != 9 ? letters[j - 1].toUpperCase() : '');

        td.id = (j > 0) && (j < 9) ? letters[j - 1] + (9 - i) : 'side';

        tr.appendChild(td);
      }
    }
  }

  function Piece(color, name) {
    this.color = color;
    this.name = name;
  }

  function arrangeThePiece(cell, piece, oldCell) {
    var div = document.createElement('div');
    div.innerHTML = piece.name;
    div.className = piece.color;
    if (oldCell) {
      elemRemove = document.getElementById(oldCell).firstChild;
      elemRemove.remove();
    }
    document.getElementById(cell).appendChild(div);
  }

  chessGenerate();

  var pBlack = new Piece('black', 'п');
  var rBlack = new Piece('black', 'Л');
  var nBlack = new Piece('black', 'К');
  var bBlack = new Piece('black', 'С');
  var qBlack = new Piece('black', 'Ф');
  var kBlack = new Piece('black', 'Кр');

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

  var pWhite = new Piece('white', 'п');
  var rWhite = new Piece('white', 'Л');
  var nWhite = new Piece('white', 'К');
  var bWhite = new Piece('white', 'С');
  var qWhite = new Piece('white', 'Ф');
  var kWhite = new Piece('white', 'Кр');

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

</script>

</html>
