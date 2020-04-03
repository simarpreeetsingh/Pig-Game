var score, activePlayer, state, tTotal;
score = [0, 0];
activePlayer = 0;
state = true;
tTotal = 0;

document.querySelector('.roll').addEventListener('click', function() {
  if (state) {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.not-started').style.display = 'none';

    document.querySelector('.player-' + activePlayer + '-panel').style.backgroundColor = '#ffc8bd';

    var diceDOM = document.querySelector('.dice-val');
    diceDOM.style.display = 'inline';
    var diceDisDOM = document.querySelector('.dice-display');
    diceDisDOM.src = 'Dice-' + dice + '.png';

    if (dice > 1) {
      tTotal += dice;
      document.querySelector('.tTotal' + activePlayer).textContent = 'Turn total : ' + tTotal;
    } else {
      turnChange();
    }
  }
});

document.querySelector('.hold').addEventListener('click', function() {
  score[activePlayer] += tTotal;
  document.querySelector('.count' + activePlayer).textContent = score[activePlayer];
  document.querySelector('.dice-val').style.display = 'none';
  state = !(score[activePlayer] >= 100);

  if (state) {
    turnChange();

    document.querySelector('.not-started').textContent = 'Player ' + (activePlayer + 1) + '\'s turn to roll the dice';
    document.querySelector('.not-started').style.display = 'inline';
  } else {
    alert('Congratulations Player ' + (activePlayer + 1) + '! You\'ve won the game! Press the \'New Game\' button to start with another match.');
    document.querySelector('.tTotal' + activePlayer).textContent = 'Turn total : 0';
    tTotal = 0;
  }

})

document.querySelector('.new').addEventListener('click', function() {
  score = [0, 0];
  activePlayer = 0;
  state = true;
  tTotal = 0;

  document.querySelector('.not-started').textContent = 'Game yet to be started.';

  document.querySelector('.not-started').style.display = 'inline';
  document.querySelector('.dice-val').style.display = 'none';

  document.querySelector('.player-0-panel').style.backgroundColor = '#ffebd9';
  document.querySelector('.player-1-panel').style.backgroundColor = '#ffebd9';

  document.querySelector('.tTotal0').textContent = 'Turn total : 0';
  document.querySelector('.tTotal1').textContent = 'Turn total : 0';
  document.querySelector('.count0').textContent = 0;
  document.querySelector('.count1').textContent = 0;
})

function turnChange() {
  document.querySelector('.player-' + activePlayer + '-panel').style.backgroundColor = '#ffebd9';
  document.querySelector('.tTotal' + activePlayer).textContent = 'Turn total : 0';

  tTotal = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector('.player-' + activePlayer + '-panel').style.backgroundColor = '#ffc8bd';
}
