import quests from '../data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');




const h2 = document.querySelector('h2');
const ul = document.querySelector('ul');
const img = document.querySelector('img');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
for (let quest of quests){
    let currentItem = findById(quests, questId);
    
    
    if (currentItem.id === 'mars'){
        h2.textContent = currentItem.description;
        img.src = `../assets/${currentItem.image}`;
        
        li1.textContent = currentItem.choices[0].description;
        li2.textContent = currentItem.choices[1].description;
        li3.textContent = currentItem.choices[2].description;
     
        ul.append(li1, li2, li3);

    } else if (currentItem.id === 'earth') {
        h2.textContent = currentItem.description;
        img.src = `../assets/${currentItem.image}`;
        li1.textContent = currentItem.choices[0].description;
        li2.textContent = currentItem.choices[1].description;
        li3.textContent = currentItem.choices[2].description;
     
        ul.append(li1, li2, li3);
    } else if (currentItem.id === 'moon'){
        h2.textContent = currentItem.description;
        img.src = `../assets/${currentItem.image}`;
        li1.textContent = currentItem.choices[0].description;
        li2.textContent = currentItem.choices[1].description;
        li3.textContent = currentItem.choices[2].description;
     
        ul.append(li1, li2, li3);
    }
}
