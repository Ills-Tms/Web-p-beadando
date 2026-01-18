const gameArea = document.querySelector('#gamearea')
const startButton = document.querySelector('#start')
const szamlalo = document.querySelector('#szamlalo')
const scoreBoard = document.querySelector('#score')
let ido = 0
let t = []
let idozito
let nextNumber
let legjobbido = 9999999
let elozo

function initNumbers() {
  for (let i = 0; i < 12; i++) {
    t.push(i + 1)
  }
}

function shuffleNumbers() {
  for (let i = 0; i < 100; i++) {
    let pos1 = Math.floor(Math.random() * 12)
    let pos2 = Math.floor(Math.random() * 12)
    let temp = t[pos1]
    t[pos1] = t[pos2]
    t[pos2] = temp
  }
}

function createBoxes() {
  for (let i = 0; i < 12; i++) {
    let szamDoboz = document.createElement('div')

    szamDoboz.classList.add('rejtett')
    gameArea.appendChild(szamDoboz)

    szamDoboz.addEventListener('click', function () {
      if (szamDoboz.innerText == nextNumber) {
        szamDoboz.classList.add('rejtett')
        nextNumber++

        if (nextNumber == 13) {
          clearInterval(idozito)
          elozo = ido
          ido = 0
          if (legjobbido > elozo) {
            legjobbido = elozo
            scoreBoard.innerText = 'A legjobb ido:' + legjobbido
          }
        }
      }
    })
  }
}
function fillShowBoxes() {
  const szamDobozok = gameArea.querySelectorAll('div')
  let i = 0
  for (szamDoboz of szamDobozok) {
    szamDoboz.innerText = t[i]
    szamDoboz.classList.remove('rejtett')
    i++
  }
}

function startTimer() {
  idozito = setInterval(function () {
    szamlalo.innerText = (ido / 100).toFixed(2)
    ido++
  }, 10)
}

createBoxes()
initNumbers()
startButton.addEventListener('click', function () {
  if (szamlalo.innerText != 0) {
    ido = 0
  }
  nextNumber = 1
  startTimer()
  shuffleNumbers()
  fillShowBoxes()
})