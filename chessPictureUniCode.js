'use strict';

// то же самое можно сделать с помощью иконочных шрифтов (есть в закладках хрома)

var content = document.getElementsByClassName('content')[0];

var divTrashW = document.createElement('div');
divTrashW.className = 'white trash';
content.appendChild(divTrashW);

var leftBox = document.createElement('div');
leftBox.className = 'leftBox';
content.appendChild(leftBox);

var cellId = document.createElement('div');
cellId.id = 'elem';
leftBox.appendChild(cellId);

var trashRestore = document.createElement('i');
trashRestore.className = 'fas fa-trash-restore fa-2x o-hide';
leftBox.appendChild(trashRestore);

(function chessGenerate() {

  var table = document.createElement('table');
  table.className = "tableChess";

  content.appendChild(table);

  for (var i = 0; i <= 9; ++i) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j = 64; j <= 73; ++j) {
      var td = document.createElement('td');
      td.className = ((i == 0 || i == 9) && (j == 64 || j == 73) ? 'corner' : i == 0 ? 'top' : i == 9 ? 'bottom' : j == 64 ? 'left' : j == 73 ? 'right' : ((i + j) % 2) ? 'black' : 'white');
      td.id = String.fromCharCode(j).toLowerCase() + (9 - i);
      tr.appendChild(td);
    }
  }
  for (i = 1; i <= 8; ++i) {
    document.getElementById('@' + i).innerHTML = i;
    document.getElementById('i' + i).innerHTML = i;
  }
  for (j = 65; j <= 72; ++j) {
    document.getElementById(String.fromCharCode(j).toLowerCase() + 0).innerHTML = String.fromCharCode(j);
    document.getElementById(String.fromCharCode(j).toLowerCase() + 9).innerHTML = String.fromCharCode(j);
  }
})();

var divTrashB = document.createElement('div');
divTrashB.className = 'black trash';
content.appendChild(divTrashB);

function Piece(name, original, uni, current) {
  this.name = name;
  this.originalPosition = original;
  this.uniCode = uni;
  this.currentPosition = (current ? current : original);
}

function arrangeThePiece(cell, unicode, oldCell) {
  if (oldCell) {
    document.getElementById(oldCell).innerHTML = '';
    pieces.forEach(function (piece) {
      if (piece.currentPosition == oldCell) {
        piece.currentPosition = cell;
      }
    });
  }
  document.getElementById(cell).innerHTML = unicode;
}

var pieces = [
  new Piece('Пешка', 'a7', '\u265F'),
  new Piece('Пешка', 'b7', '\u265F'),
  new Piece('Пешка', 'c7', '\u265F'),
  new Piece('Пешка', 'd7', '\u265F'),
  new Piece('Пешка', 'e7', '\u265F'),
  new Piece('Пешка', 'f7', '\u265F'),
  new Piece('Пешка', 'g7', '\u265F'),
  new Piece('Пешка', 'h7', '\u265F'),

  new Piece('Ладья', 'a8', '\u265C'),
  new Piece('Ладья', 'h8', '\u265C'),
  new Piece('Конь', 'b8', '\u265E'),
  new Piece('Конь', 'g8', '\u265E'),
  new Piece('Слон', 'c8', '\u265D'),
  new Piece('Слон', 'f8', '\u265D'),
  new Piece('Ферзь', 'd8', '\u265B'),
  new Piece('Король', 'e8', '\u265A'),

  new Piece('Пешка', 'a2', '\u2659'),
  new Piece('Пешка', 'b2', '\u2659'),
  new Piece('Пешка', 'c2', '\u2659'),
  new Piece('Пешка', 'd2', '\u2659'),
  new Piece('Пешка', 'e2', '\u2659'),
  new Piece('Пешка', 'f2', '\u2659'),
  new Piece('Пешка', 'g2', '\u2659'),
  new Piece('Пешка', 'h2', '\u2659'),

  new Piece('Ладья', 'a1', '\u2656'),
  new Piece('Ладья', 'h1', '\u2656'),
  new Piece('Конь', 'b1', '\u2658'),
  new Piece('Конь', 'g1', '\u2658'),
  new Piece('Слон', 'c1', '\u2657'),
  new Piece('Слон', 'f1', '\u2657'),
  new Piece('Ферзь', 'd1', '\u2655'),
  new Piece('Король', 'e1', '\u2654')
];

var counter = 0;

function arrangePiecesStart() {
  if (counter) {
    counter = 0;
  }
  pieces.forEach(function (piece) {
    var delElem = document.getElementById(piece.originalPosition + 't');
    if(delElem){
      delElem.remove();
      document.getElementsByClassName('fas')[0].classList.add("o-hide");
    }
    piece.currentPosition = piece.originalPosition;
    arrangeThePiece(piece.originalPosition, piece.uniCode);
  });
}

arrangePiecesStart();
trashRestore.addEventListener('click', arrangePiecesStart);

document.getElementsByClassName('tableChess')[0].onclick = function (event) {
  selectCell(event.target.id);
  if (event.target.innerHTML) {
    pieceToTrash(event.target.id);
  }
};

document.getElementsByClassName('white trash')[0].onclick = function (event) {
  if (event.target.id) {
    trashToBoard(event.target.id);
  }
};

document.getElementsByClassName('black trash')[0].onclick = function (event) {
  if (event.target.id) {
    trashToBoard(event.target.id);
  }
};

function trashToBoard(cellId) {
  document.getElementById(cellId).remove();
  pieces.forEach(function (piece) {
    if (piece.currentPosition == cellId) {
      counter--;
      if (!counter) {
        document.getElementsByClassName('fas')[0].classList.add("o-hide");
      }
      piece.currentPosition = piece.originalPosition;
      document.getElementById(piece.originalPosition).innerHTML = piece.uniCode;
    }
  });
}

function pieceToTrash(id) {
  pieces.forEach(function (piece) {
    if (piece.currentPosition == id) {
      if (!counter) {
        document.getElementsByClassName('fas')[0].classList.remove("o-hide");
      }
      counter++;
      piece.currentPosition = id + 't';
      document.getElementById(id).innerHTML = '';
      var trashCell = document.createElement('div');
      trashCell.innerHTML = piece.uniCode;
      trashCell.id = id + 't';
      trashCell.className = 'trashCell';
      if (piece.originalPosition.charAt(1) > 6) {
        document.getElementsByClassName('trash')[1].appendChild(trashCell);
      } else {
        document.getElementsByClassName('trash')[0].appendChild(trashCell);
      }
    }
  });
}

function selectCell(cellId) {
  var classOfCell = document.getElementById(cellId).className;
  if (classOfCell != 'top' && classOfCell != 'bottom' && classOfCell != 'right' && classOfCell != 'left' && classOfCell != 'corner') {
    document.getElementById('elem').innerHTML = cellId;
  }

  //  var cell = document.querySelector("td[style='background: orange;']");
  var cellSelected = document.getElementsByClassName('selected')[0];
  if (cellSelected) {
    cellSelected.classList.remove("selected");
    //    cell.removeAttribute('style');
  }
  //  document.getElementById(cellId).style.background = 'orange';
  document.getElementById(cellId).classList.add("selected");
}

document.onkeydown = function (event) {
  var keycode;
  if (!event) var event = window.event;
  if (event.keyCode) keycode = event.keyCode; // для IE
  else if (event.which) keycode = event.which; // для всех браузеров
  var cellSelected = document.getElementsByClassName('selected')[0];
  if (keycode >= 37 && keycode <= 40 && cellSelected) {
    var newCellId;
    if (keycode == 37) {
      newCellId = (cellSelected.previousElementSibling.id == cellSelected.parentElement.firstElementChild.id ? cellSelected.parentElement.lastElementChild.previousElementSibling.id : cellSelected.previousElementSibling.id);
    } else if (keycode == 39) {
      newCellId = (cellSelected.nextElementSibling.id == cellSelected.parentElement.lastElementChild.id ? cellSelected.parentElement.firstElementChild.nextElementSibling.id : cellSelected.nextElementSibling.id);
    } else if (keycode == 38) {
      newCellId = (cellSelected.id.charAt(1) == 8 ? cellSelected.id.charAt(0) + 1 : cellSelected.id.charAt(0) + (+cellSelected.id.charAt(1) + 1));
    } else if (keycode == 40) {
      newCellId = (cellSelected.id.charAt(1) == 1 ? cellSelected.id.charAt(0) + 8 : cellSelected.id.charAt(0) + (+cellSelected.id.charAt(1) - 1));
    }
    selectCell(newCellId);
  }
}
/* ход е2-е4 при клике на е2 с задержкой 3 секунды
e2.onclick = function() {
  setTimeout(arrangeThePiece, 3000, 'e4', pWhite, 'e2');
}
*/
