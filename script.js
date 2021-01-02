const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';        
      });
    })
    //Computer Options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        //Reset options
        playerHand.src = `./images/rock.png`;
        computerHand.src = `./images/rock.png`;
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
        }, 1800);
        //Animation
        playerHand.style.animation = "shakePlayer 1.8s ease";
        computerHand.style.animation = "shakeComputer 1.8s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

  }

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector('.winner');
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }
    //Check for Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player Wins!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer Wins!';
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer Wins!';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins!';
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer Wins!';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player Wins!';
        pScore++;
        updateScore();
        return;
      }
    }

  }




  startGame();
  playMatch();
};
// start the game function
game();