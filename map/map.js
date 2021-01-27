import quests from '../data.js';

const PLAYER = 'PLAYER';

const ul = document.querySelector('ul');
console.log(ul);
const maperz = document.querySelector('.container');

maperz.classList.add('img');

const user = JSON.parse(localStorage.getItem(PLAYER));

console.log(user);