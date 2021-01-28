import quests from '../data.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');




const h2 = document.querySelector('h2');
const form = document.querySelector('form');
const img = document.querySelector('img');

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');

let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');

input1.type = 'radio';
input2.type = 'radio';
input3.type = 'radio';

input1.name = 'selection';
input2.name = 'selection';
input3.name = 'selection';

for (let quest of quests){
    let currentItem = findById(quests, questId);
    
    
    if (currentItem.id === 'mars'){
        h2.textContent = currentItem.description;
        img.src = `../assets/${currentItem.image}`;
        
        label1.textContent = currentItem.choices[0].description;

        label2.textContent = currentItem.choices[1].description;
        label3.textContent = currentItem.choices[2].description;
        
        label1.append(input1);
        label2.append(input2);
        label3.append(input3);
        form.append(label1, label2, label3);
        

    } else if (currentItem.id === 'earth') {
        h2.textContent = currentItem.description;
        img.src = `../assets/${currentItem.image}`;
        label1.textContent = currentItem.choices[0].description;

        label2.textContent = currentItem.choices[1].description;
        label3.textContent = currentItem.choices[2].description;
        
        label1.append(input1);
        label2.append(input2);
        label3.append(input3);
        form.append(label1, label2, label3);
        
    
    } else if (currentItem.id === 'moon'){
        h2.textContent = currentItem.description;
        img.src = `../assets/${currentItem.image}`;
        label1.textContent = currentItem.choices[0].description;

        label2.textContent = currentItem.choices[1].description;
        label3.textContent = currentItem.choices[2].description;
        
        label1.append(input1);
        label2.append(input2);
        label3.append(input3);
        form.append(label1, label2, label3);
    }
}

const button = document.createElement('button');
button.textContent = 'Submit action choice';
form.append(button);


form.addEventListener('submit', (e) =>{
    e.preventDefault();
});