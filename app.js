// import functions and grab DOM elements

// initialize state
const form = document.querySelector('form');


// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    //prevent 90's throwback functionality
    e.preventDefault();

    //take in the data from the form
    const formData = new FormData(form);
    //build a player object, will push to local storage
    const player = {
        name:formData.get('name'),
        character: formData.get('character'),
        hp: 35, //change this to hype factor
        cash: 0, //change this to winnings
        completed: {},
    };

    //turn the object to a string and push to localstorage
    const playerString = JSON.stringify(player);
    localStorage.setItem('PLAYER', playerString);

    //redirect user to maps for the next step
    if (player.character){
        window.location = './map';
    }
}); 

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'start game';
form.append(button);
