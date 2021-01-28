import quests from '../data.js';

const PLAYER = 'PLAYER';
//grab the 'phantom list' from html
const ul = document.querySelector('ul');
console.log(ul);

//map container html element
const maperz = document.querySelector('.container');
maperz.classList.add('img');
//grab the user from local storage

const user = JSON.parse(localStorage.getItem(PLAYER));
//when user arrives we need two pieces of information
//the number of tests they've completed 
//their hitpoints remaining 

let completedAllQuests = true;
//iterate through user.completed objects and test if completed for current quest item is true
for (let quest of quests){
    //if one of the completed is not true, set completedAllQuests to false
    if (!user.completed[quest.id]){
        completedAllQuests = false;
    } 
}

if (user.hp <= 0 || completedAllQuests){
    window.location = '.../results';
}


//We must build our links onto the page
//links will have text content of id of quests
for (let quest of quests){
    console.log(quests);
    const li = document.createElement('li');
    const a = document.createElement('a');
    console.log(quest.title);
    a.textContent = quest.title;
    a.href = `../quest/index.html?id=${quest.id}`;
    li.append(a);
    ul.append(li);
}

//links are built now we must append their node to the li node


console.log(user);