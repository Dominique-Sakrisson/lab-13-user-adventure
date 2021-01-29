const div = document.querySelector('.container');
const user = JSON.parse(localStorage.getItem('PLAYER'));
const cashResult = document.createElement('p');
const hpResult = document.createElement('p');
const endMsg = document.createElement('p');
const playButton = document.createElement('button');
playButton.textContent = 'play again';
cashResult.textContent = `The amount of cash in your pockets ${user.cash}`;
hpResult.textContent = `Your overall hype points were ${user.hp}`;

if (user.hp < 30){
    endMsg.textContent = 'There was\'nt much excitement coming from the crowd on you runs';
}

if (user.hp > 30 && user.hp <= 79){
    endMsg.textContent = 'The crowd was \'feeling it\' during your runs!'
}

if (user.hp > 79){
    endMsg.textContent = 'You really blew the lid off the place shredder!';
}

playButton.addEventListener('click', (e) =>{
    e.preventDefault();
    localStorage.clear();
    window.location = '../index.html';
});

div.append(cashResult, hpResult, endMsg, playButton);
