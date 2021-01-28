import quests from '../data.js';
import { findById } from '../utils.js';
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const h2 = document.querySelector('h2');
const form = document.querySelector('form');
const img = document.querySelector('img');



/*
let input = document.createElement('input');
let label = document.createElement('label');
*/
/*
input1.type = 'radio';
input2.type = 'radio';
input3.type = 'radio';

input1.value = 'moon';
input2.value = 'earth';
input3.value = 'mars';

input1.name = 'selection';
input2.name = 'selection';
input3.name = 'selection';
*/ 
const quest = findById(quests, questId);
h2.textContent = quest.title;
img.src = `../assets/${quest.image}`;

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
/*
    if (choice.id === 'mars'){
        console.log(choice.id);
        h2.textContent = choice.description;
        



        /*
        label2.textContent = currentItem.choices[1].description;
        label3.textContent = currentItem.choices[2].description;
        
        label1.append(input1);
        label2.append(input2);
        label3.append(input3);
  
        form.append(label1, label2, label3);
       

    } else if (choice.id === 'earth') {
        h2.textContent = choice.description;
        img.src = `../assets/${choice.image}`;
        label.append(input);
        form.append(label);



        label2.textContent = currentItem.choices[1].description;
        label3.textContent = currentItem.choices[2].description;
        
        label1.append(input1);
        label2.append(input2);
        label3.append(input3);
        form.append(label1, label2, label3);
       
    
    } else if (choice.id === 'moon'){
        h2.textContent = choice.description;
        img.src = `../assets/${choice.image}`;
        label.append(input);
        form.append(label);
        /*
        label1.textContent = currentItem.choices[0].description;

        label2.textContent = currentItem.choices[1].description;
        label3.textContent = currentItem.choices[2].description;
        
        label1.append(input1);
        label2.append(input2);
        label3.append(input3);
        form.append(label1, label2, label3);
        
       

    }
    */
}

const button = document.createElement('button');
button.textContent = 'Submit action choice';
form.append(button);


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(form);
    //get form data
    const formData = new FormData(form);
    const selectionId = formData.get('selection');


    const user = JSON.parse(localStorage.getItem('PLAYER'));
    console.log(user);
    if (!selectionId){
        alert('Please select a task');
    }

    console.log(selectionId);

    console.log(quests);

    const choice = findById(quests.choices, selectionId);

    console.log(choice);
    console.log(formData.choices);

    
});