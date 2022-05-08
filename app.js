//Variaveis Players
var player1 = 'Player 1'
var player2 = 'Player 2'

//Variaveis Filds
var b01 = document.querySelector('#b1')
var b02 = document.querySelector('#b2')
var b03 = document.querySelector('#b3')
var b04 = document.querySelector('#b4')
var b05 = document.querySelector('#b5')
var b06 = document.querySelector('#b6')
var b07 = document.querySelector('#b7')
var b08 = document.querySelector('#b8')
var b09 = document.querySelector('#b9')

//Variaveis Alteração de Nomes
var btnNames = document.querySelector('.btn-player')
var modalNames = document.querySelector('.modal-players')
var btnNewNames = document.querySelector('.btn-player-name')
var btnPlayer = document.querySelector('.btn-player')

var player1Name = document.querySelector('#player1')
var player2Name = document.querySelector('#player2')

var player1 = document.querySelector('.player-01')
var player2 = document.querySelector('.player-02')

//Variaveis Vencedores
var winX = document.querySelector('.modal-players-win-x')
var winO = document.querySelector('.modal-players-win-o')
var nameWinX = document.querySelector('.current-winer-x')
var namewinO = document.querySelector('.current-winer-o')

// Editando Nomes
btnPlayer.addEventListener('click', function () {
  anime({
    targets: '.modal-players',
    translateX: 250
  })
  modalNames.classList.remove('is-closed')
})

btnNewNames.addEventListener('click', function () {
  player1.innerHTML = player1Name.value
  player2.innerHTML = player2Name.value
  modalNames.classList.add('is-closed')
  nameWinnerX.innerHTML = player2Name.value
})

var nameWinnerX = document.querySelector('.current-winer-x')

// Game
var fild = document.querySelectorAll('.fild')
var currentPlayer = 'X'

for (let i = 0; i < fild.length; i++) {
  const element = fild[i]

  element.addEventListener('click', function () {
    if (element.innerHTML == '') {
      element.innerHTML = currentPlayer
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'

      if (currentPlayer === 'X') {
        element.classList.remove('p-1')
        element.classList.add('p-2')
      } else {
        element.classList.remove('p-2')
        element.classList.add('p-1')
      }
      winnerX()
      winnerO()
    }
  })

  element.addEventListener('click', function () {})
}

// Validação de Vencedor
function winnerX() {
  if (b01.innerHTML == 'X' && b02.innerHTML == 'X' && b03.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b04.innerHTML == 'X' && b05.innerHTML == 'X' && b06.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b07.innerHTML == 'X' && b08.innerHTML == 'X' && b09.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b01.innerHTML == 'X' && b04.innerHTML == 'X' && b07.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b02.innerHTML == 'X' && b05.innerHTML == 'X' && b08.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b03.innerHTML == 'X' && b06.innerHTML == 'X' && b09.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b01.innerHTML == 'X' && b05.innerHTML == 'X' && b09.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
  if (b03.innerHTML == 'X' && b05.innerHTML == 'X' && b07.innerHTML == 'X') {
    winX.classList.remove('is-closed')
    nameWinX.innerHTML = player1.innerHTML
    anime({
      targets: '.modal-players-win-x',
      translateX: 250
    })
  }
}
function winnerO() {
  if (b01.innerHTML == 'O' && b02.innerHTML == 'O' && b03.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b04.innerHTML == 'O' && b05.innerHTML == 'O' && b06.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b07.innerHTML == 'O' && b08.innerHTML == 'O' && b09.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b01.innerHTML == 'O' && b04.innerHTML == 'O' && b07.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b02.innerHTML == 'O' && b05.innerHTML == 'O' && b08.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b03.innerHTML == 'O' && b06.innerHTML == 'O' && b09.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b01.innerHTML == 'O' && b05.innerHTML == 'O' && b09.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
  if (b03.innerHTML == 'O' && b05.innerHTML == 'O' && b07.innerHTML == 'O') {
    winO.classList.remove('is-closed')
    namewinO.innerHTML = player2.innerHTML
    anime({
      targets: '.modal-players-win-o',
      translateX: 250
    })
  }
}

// Reiniciando Game
var btnReset = document.querySelectorAll('.btn-reset')
for (let r = 0; r < btnReset.length; r++) {
  btnReset[r].addEventListener('click', function () {
    winX.classList.add('is-closed')
    winO.classList.add('is-closed')

    for (let el = 0; el < fild.length; el++) {
      fild[el].innerHTML = ''
    }
  })
}
