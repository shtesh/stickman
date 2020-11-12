window.onload = function() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 
            'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 
    'q', 'r', 's', 
            't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let themes; //Array of game themes
    let selectedTheme; //Game theme selected 
    let secretWord; //Selected word
    let guess;
    let letters= []; //Stored guesses
    let lives; //Remaining lives
    let counter;
    let space;

    //Get HTML elements
    let showLives = document.getElementById('remainingLives');
    let showTheme = document.getElementById('themeName');
    let getHint = document.getElementById('hint');
    let showClue = document.getElementById('clue');

    //Create alphabet <ul>
    let buttons = function() {
        displayButtons = document.getElementById('buttons');
        displayLetters = document.createElement('ul');

        for (let i = 0; i < alphabet.length; i++) {
            displayLetters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            displayButtons.appendChild(displayLetters);
            displayLetters.appendChild(list);
        }
    };

    //Select a theme for the game round
    let selectTheme = function() {
        if (selectedTheme === themes[0]) {
            themeName.innerHTML = 'The Chosen Topic Is Olympic Sports';
        } else if (selectedTheme === themes[1]) {
            themeName.innerHTML = 'The Chosen Topic Is Planets';
        } else if (selectedTheme === themes[2]) {
            themeName.innerHTML = 'The Chosen Topic Is Global Cities';
        }
    };

    //Create guesses' <ul>
    let result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < secretWord.length; i++) {
            correct.setAttribute('id', 'secret-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (secretWord[i] === '-') {
                guess.innerHTML = '-';
                space = 1;
            } else {
                guess.innerHTML = '_';
            }

        letters.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
        }
    };

    //Show remaining lives
    let livesCounter = function() {
        showLives.innerHTML = 'You have ' + lives + ' lives.';
    if (lives < 1) {
        showLives.innerHTML = 'Désolé, Game Over!';
    }
    for (let i = 0; i < letters.length; i++) {
        if (counter + space === letters.length) {
            showLives.innerHTML = 'Congratulations, Winner!';
        }
      }
    };

//Animate the stickman  
let animate = function() {
    let drawMe = lives;
    drawArray[drawMe]();
};

//Drawing the gallows and the stickman with canvas
let canvas = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#7E191B";
    context.lineWidth = 2;
  };
  
let head = function() {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    };
    
let draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
};

let scaffold1 = function() {
     draw (0, 150, 150, 150);
   };
   
let scaffold2 = function() {
     draw (10, 0, 10, 600);
   };
  
let scaffold3 = function() {
     draw (0, 5, 70, 5);
   };
  
let scaffold4 = function() {
     draw (60, 5, 60, 15);
   };
  
let core = function() {
     draw (60, 36, 60, 70);
   };
  
let rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
let leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
let rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
let leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
let drawArray = [rightLeg, leftLeg, rightArm, leftArm, core, head, scaffold4, scaffold3, scaffold2, scaffold1]; 
  
let check = function() {
        list.onclick = function() {
            let guess = (this.innerHTML);
            console.log(guess);
            this.setAttribute('class', 'active');
            this.onclick = null;
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === guess) {
                    letters[i].innerHTML = guess;
                    counter += 1;
                }
            }
            let j = (secretWord.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                livesCounter();
                animate();
            } else {
                livesCounter();
            }
        }
    };


let play = function() {
        themes = [
            ['biathlon', 'curling', 'gymnastics', 'hockey', 'karate', 'skating', 'swimming','tennis'],
            ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
            ['amsterdam', 'barcelona', 'berlin', 'paris', 'london', 'munich', 'tokyo', 'dallas-fort worth']
        ];
    
        selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        secretWord = selectedTheme[Math.floor(Math.random() * selectedTheme.length)];
        /*/\s/g replaces whitespaces with other characters
        \s is a regular expression escape and means "any whitespace character".
        /g at the end is a flag which means "match globally" (the regular expression will now match multiple times -- otherwise it would match just once).*/
        secretWord = secretWord.replace(/\s/g, '-');
        console.log(secretWord);
        buttons();
    
        letters = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        livesCounter();
        selectTheme();
        canvas();
    };
    
    play();

    //Giving a hint on demand
    hint.onclick = function() {
        hints = [
            ['Consists of skiing and shooting', 'Involves sliding stones on ice', 'Involves using equipment such as bars and ropes', 'Played on ice with sticks', 'The level of skill a sportsman has is shown by the color of his belt', 'Involves circular patterns and jumps', 'Aquatics sport', 'Hitting a ball with a racket'],
            ['Closest to the Sun', 'Closest to Earth', 'The Red Planet', 'The largest planet in the Solar System', 'Adorned with ringlets', 'Known as the sideways planet, it rotates on its side', 'The most distant ice giant'],
            ['Capital of the Netherlands', 'Located on the Mediterranean', 'Capital of the Germany', 'City of Lights', 'Stands on the River Thames', 'Famous for Oktoberfest', 'The world most populous metropolis', 'JFK was assassinated there']
        ];

        let themeIndex = themes.indexOf(selectedTheme);
        let hintIndex = selectedTheme.indexOf(secretWord);
        showClue.innerHTML = 'Clue: ' + hints[themeIndex][hintIndex]; 
    };

    //Restart the game 
    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        displayLetters.parentNode.removeChild(displayLetters);
        showClue.innerHTML = '';
        context.clearRect(0, 0, 400, 400);
        play();
    };
};

    
