
//sorbanyomkodos (regi orai munka volt )
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

//kopapir

const container = document.getElementById("kopapir");



    container.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            playKopapir(btn.dataset.choice);
        });
    });


function playKopapir(playerChoice) {
    const choices = ["ko", "papir", "ollo"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = `Te: ${playerChoice} | Gép: ${computerChoice} → `;

    if (playerChoice === computerChoice) {
        result += "Döntetlen!";
    } else if (
        (playerChoice === "ko" && computerChoice === "ollo") ||
        (playerChoice === "papir" && computerChoice === "ko") ||
        (playerChoice === "ollo" && computerChoice === "papir")
    ) {
        result += "Nyertél ";
    } else {
        result += "Vesztettél ";
    }

    document.getElementById("kopapirresult").textContent = result;
}

//guess the number

const guessContainer = document.getElementById("guessthenum");
 let secretNumber = Math.floor(Math.random() * 100) + 1;


    document.getElementById("guessBtn").addEventListener("click", makeGuess);


function makeGuess() {
    const input = document.getElementById("guessInput");
    const result = document.getElementById("guessResult");
   
    
    const guess = Number(input.value);
    

    if (!guess || guess < 1 || guess > 100) {
        result.textContent = "1 és 100 közötti számot adj meg!";
        return;
    }

    if (guess == secretNumber) {
        result.textContent = " Eltaláltad!";
    } else if (guess < secretNumber) {
        result.textContent = " Nagyobb számra gondoltam.";
    } else {
        result.textContent = "⬇ Kisebb számra gondoltam.";
    }
}
