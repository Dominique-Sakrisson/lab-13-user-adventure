const earth = {
    id: 'earth',
    title: 'Escape to Earth',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'earth.jpg',
    description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const mars = {
    id: 'mars',
    title: 'Million Miles to Mars',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'mars.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        Welcome to the 'Million Miles to Mars skate competition. A few things to know that are important. Mars is dry, be sure drink lots of water. ... A spacesuit..? What kind of shredder are you, of course you don't get a spacesuit. Get out of my face and go skate. Last thing, watch out for rocks!
    `,
    choices: [{
        id: 'run',
        description: 'Go skate the flatbar and boxes',
        result: `
           Due to the low gravity on Mars doing tricks that leave the ground get extra height, allowing you to pull off some crazy 1080 flips into your grinds on the rails. You set a world record for the most double flips in a single trick. However the Mars record is much higher.  
        `,
        hp: +0,
        gold: 0
    }, {
        id: 'fight',
        description: 'Try the handrail, might earn you some big points!',
        result: `
            You examine the approach to the stairway. There's alot of rocks and sand.. The stairs also aren't stairs, its more like a large drop off with a handrail bridging the ascent. Your attempt ends in vain, as you attempt to ollie onto the rail you float right over it and continue in the air another 30 meters. You forgot Mars has low gravity, and your path ends you right in front of a quickly moving rover. 
        `,
        hp: -100,
        gold: 0
    }, {
        id: 'archer',
        description: 'Sneak your way to the lounge and hang out',
        result: `
            After a awesome day of laughing and partying with the VIP's you feel spiritually replenished. You even noticed somebody lost a $20 when they got up from the couch. All in all, today was a good day. 
        `,
        hp: 0,
        gold: 20
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
        For years we wondered what was on the dark side of the moon. Its been the subject of speculation and occult fiction. Well now we know that there was a pretty rad alien colony who loves to shred!
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    earth, 
    moon,
    mars,
];

export default quests;