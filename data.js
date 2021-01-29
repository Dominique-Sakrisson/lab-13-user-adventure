const earth = {
    id: 'earth',
    title: 'Escape to Earth',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'earth.jpg',
    description: `
        Today it's 73F; and you have all day to do whatever you want.  
    `,
    choices: [{
        id: 'negotiate',
        description: 'Hit up the shoreline',
        result: `
            What's better than a day soaking up rays and sand between your toes? You and a few other shredders play a game of skate, each putting up 5 cash money, you win and walk away with the 35 cash money pot!. 
        `,
        hp: 0,
        cash: 35
    }, {
        id: 'fight',
        description: 'Skate around town',
        result: `
            At one point during your ride about town you are attacked by a security guard. He was out of line, so you sue and end up winning. You loss 30 hype points and gain 50 cash money!
        `,
        hp: -30,
        cash: 50
    }, {
        id: 'run',
        description: 'Whatever else, You, do you',
        result: `
            Since you ended up playing video games all day your back sort of hurts from lack of activity. You lose 50 hype points!.
        `,
        hp: -50,
        cash: 0
    }]
};

const mars = {
    id: 'mars',
    title: 'Million Miles to Mars Contest',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'mars.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        Welcome to the 'Million Miles to Mars skate competition. A few things to know that are important. Mars is dry, be sure drink lots of water. ... A spacesuit..? What kind of shredder are you, of course you don't get a spacesuit. Get out of my face and go skate. Last thing, watch out for rocks!

        Your task is to choose from our list of activities to try and score the most points in the competition!
    `,
    choices: [{
        id: 'flatbar',
        description: 'Go skate the flatbar and boxes',
        result: `
           Due to the low gravity on Mars doing tricks that leave the ground get extra height, allowing you to pull off some crazy 1080 flips into your grinds on the rails. You set a world record for the most double flips in a single trick. However the Mars record is much higher.  You gained nothing, but did manage to sprain your ankle, you lose 15 hype points.
        `,
        hp: 0,
        cash: 0
    }, {
        id: 'handrail',
        description: 'Try the handrail, might earn you some big points!',
        result: `
            You examine the approach to the stairway. There's alot of rocks and sand.. The stairs also aren't stairs, its more like a large drop off with a handrail bridging the descent. Your attempt ends in vain, as you attempt to ollie onto the rail you float right over it and continue in the air another 30 meters. You forgot Mars has low gravity, and your path ends you right in front of a quickly moving rover. Good try, but you've been pulverized. You lose all your hype points.
        `,
        hp: -100,
        cash: 0
    }, {
        id: 'chill',
        description: 'Sneak your way to the lounge and hang out',
        result: `
            After a awesome day of laughing and partying with the VIP's you feel spiritually replenished. You even noticed somebody left 20 cash for you under the couch! All in all, today was a good day ♪♪. You walked away with 60 hype points and 20 cash
        `,
        hp: +60,
        cash: 20
    }]
};

const moon = {
    id: 'moon',
    title: 'Millenial Mooners',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'moon.jpg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
    Welcome to the moon you Shredder! We're about to show you the gnarliest indoor moonbase/skatepark/   
    For years we wondered what was on the dark side of the moon. Its been the subject of speculation and occult fiction as far back as humans saw that fake documentary Apollo 18. Then they forgot all about the moon and starting believing it didnt really exist. Well now we know that the whole time there was a pretty rad alien colony who loves to shred! It's your turn to make a decent run! 
        
    `,
    choices: [{
        id: 'wooden',
        description: 'Do a little flip trick',
        result: 'You were just messing around however an alien noticed and flipped you a couple galactic units! After the exchange rates it works out to 100 cash money!',
        hp: 0,
        cash: 100
    }, {
        id: 'golden',
        description: 'Shred the mega ramp!',
        result: 'Oh no! Your shoelace was undone and stopped up your wheel on the descent of the ramp. That bites! Must have hurt alot.',
        hp: -50,
        cash: 0
    }, {
        id: 'jeweled',
        description: 'Stick to the street course',
        result: 'You ended up piecing together a solid technical run and the aliens out here loved your style! The crowd goes wild and you win the contest Congrats. You won the best trick too! you win 50 cash money and a bio-stim, thats alot of hype!!',
        hp: 35,
        cash: 50,

    }]
};

const quests = [
    earth, 
    moon,
    mars,
];


export default quests;
