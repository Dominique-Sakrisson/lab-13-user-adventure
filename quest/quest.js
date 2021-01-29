import quests from '../data.js';
import { findById } from '../utils.js';
//grab our search params and store the id value
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

//grab our html elements that user will manipulate
const h2 = document.querySelector('h2');
const form = document.querySelector('form');
const img = document.querySelector('img');


const p = document.querySelector('p');
const divLeft = document.querySelector('#top-div');
const divMiddle = document.querySelector('#middle-div');
const divRight = document.querySelector('#bottom-div');
const spanCash = document.createElement('span');
const spanHp = document.createElement('span');
const endMsg = document.createElement('p');
const exitButton = document.createElement('button');
exitButton.classList.add('btn');
exitButton.textContent = 'Back to the map!';
//get acces to our local storage player
const user = JSON.parse(localStorage.getItem('PLAYER'));

//
const startingHp = user.hp;
const startingCash = user.cash;
//set the page image and title 
const quest = findById(quests, questId);
h2.textContent = quest.title;
console.log(quest.description);
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;


//build our choices and inputs
for (let choice of quest.choices){
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');

    label.textContent = choice.description;
    
    input.type = 'radio';
    input.value = choice.id;
    input.name = 'selection';
    label.append(span, input);      
    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Submit action choice';
form.appendChild(button);


form.addEventListener('submit', (e) =>{
    e.preventDefault();
   
    //get form data
    const formData = new FormData(form);
    const selectionId = formData.get('selection');
    const choice = findById(quest.choices, selectionId);
    //const user = JSON.parse(localStorage.getItem('PLAYER'));

    if (!selectionId){
        alert('Please select a task');
    }
    
    user.hp += choice.hp;
    user.cash += choice.cash;
    user.completed[questId] = true;
    if (startingHp < user.hp){
        spanHp.classList.add('chill');
        spanHp.textContent = `You shred! + ${choice.hp} Hype Points! `;
    }
    spanCash.textContent = `also earned +${choice.cash} cash`;
    endMsg.textContent = choice.result;
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('PLAYER', stringyUser);
    applyHideclass();
    console.log(divLeft);
    addEndElements(divLeft);    
});

function addEndElements(parentElement){
    parentElement.append(endMsg, spanHp, spanCash, exitButton);
}

exitButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../map';
});

function applyHideclass(){
    h2.classList.add('hide');
    form.classList.add('hide');
    p.classList.add('hide');
}
