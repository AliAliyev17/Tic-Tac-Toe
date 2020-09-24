palette = ['red', 'green']
activeColorId = 1

function changeColor() {
  activeColorId = activeColorId%2+1
}

function reset() {
  location.reload();
}

function checkBoard() {
  board = [[], [], []];
  for(var i=0; i<9; i++) {
    board[Math.trunc(i/3)][i%3] = document.querySelector("#\\3"+(i+1)).style['background-color'];
  }
  console.log(board)
  //checking rows and columns
  for(i=0; i<3; i++) {
    console.log(board[i])
    if((board[i][0]===board[i][1] && board[i][1]===board[i][2]) || 
       (board[0][i]===board[1][i] && board[1][i]===board[2][i])) {
      if(board[i][i]) {alert(board[i][i]+" wins!"); reset();}
    }
  }
  //checking diagonals
  if((board[0][0]===board[1][1] && board[1][1]===board[2][2]) || 
     (board[0][2]===board[1][1] && board[1][1]===board[2][0])) {
    if(board[1][1]) {alert(board[1][1]+" wins!"); reset();}
  }
}

function colorButton(id) {
  element = document.querySelector('#\\3'+id)
  if(element.style['background-color']) {
    return null;
  }
  color = palette[activeColorId-1];
  element.style['background-color'] = color;
  changeColor();
  checkBoard();
}
