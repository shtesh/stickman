window.onload = function() {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var themes;
    var selectedTheme;
    var getHint;
    var secretWord;
    var guess;
    var letters;
    var lives;
    var counter;
    var space;

    var showLives = document.getElementById('remainingLives');
    var showTheme = document.getElementById('stheme');
    var getHint = document.getElementById('hint');
    var showClue = document.getElementById('clue');

    var buttons = function() {
        displayButtons = document.getElementById('buttons');
        displayLetters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            displayLetters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();

            displayButtons.appendChild(displayLetters);
            displayLetters.appendChild(list);
        }
    }

    var selectTheme = function() {
        if (selectedTheme === themes[0]) {
            themeName.innerHTML = 'The Chosen Topic Is Olympic Sports';
        } else if (selectedTheme === themes[1]) {
            themeName.innerHTML = 'The Chosen Topic Is Planets';
        } else if (selectedTheme === themes[2]) {
            themeName.innerHTML = 'The Chosen Topic Is Global Cities';
        }
    }

    result = function() {
        wordHolder = document.getElementByID('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < secretWord.length; i++) {
            correct.setAttribute('id', 'secret-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (secretWord[i] === '-') {
                guess.innerHTML = '-';
            } else {
                guess.innerHTML = '_';
            }

        letters.push(guess);
        correct.appendChild(guess);
        }
    }

    livesCounter = function() {
        showLives.innerHTML = 'You have ' + lives + ' lives.';
    if (lives < 1) {
        showLives.innerHTML = 'Désolé, Game Over!';
    }
    for (var i = 0; i < letters.length; i++) {
        if (counter + space === letters.length) {
            showLives.innerHTML = 'Congratulations, Winner!';
        }
    }
    }

    check = function() {
        list.onclick = function() {
            var guess = this.innerHTML;
            this.setAttribute('class', 'active');
            this.onclick = null;
            for (var i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === guess) {
                    letters[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = secretWord.indexOf(guess);
            if (j === -1) {
                lives -= 1;
                livesCounter();
            } else {
                livesCounter();
            }
        }
    }

    play = function() {
        themes = [
            ['biathlon', 'curling', 'gymnastics', 'hockey', 'karate', 'skating', 'swimming','tennis'],
            ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],
            ['amsterdam', 'barcelona', 'berlin', 'paris', 'london', 'munich', 'tokyo', 'dallas-fort worth']
        ];

        selectedTheme = themes[Math.floor(Math.random() * themes.length)];
        secretWord = selectedTheme[Math.floor(Math.random() * selectedTheme.length)];
        secretWord = secretWord.replace(/\s/g, '-');
        console.log(secretWord);
        buttons();

        letters = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        livesCounter();
        selectedTheme();
    }

    play();

    hint.onclick = function() {
        hints = [
            ['Consists of skiing and shooting', 'Involves sliding stones on ice', 'Involves using equipment such as bars and ropes', 'Played on ice with sticks', 'The level of skill a sportsman has is shown by the color of his belt', 'Involves circular patterns and jumps', 'Aquatics sport', 'Hitting a ball with a racket'],
            ['Closest to the Sun', 'Closest to Earth', 'The Red Planet', 'The largest planet in the Solar System', 'Adorned with ringlets', 'Known as the sideways planet, it rotates on its side', 'The most distant ice giant'],
            ['Capital of the Netherlands', 'Located on the Mediterranean', 'Capital of the Germany', 'City of Lights', 'Stands on the River Thames', 'Famous for Oktoberfest', 'The world most populous metropolis', 'JFK was assassinated there']
        ];

        var themeIndex = themes.indexOf(selectedTheme);
        var hintIndex = selectedTheme.indexOf(secretWord);
        showClue.innerHTML = 'Clue: ' + hints[themeIndex][hintIndex]; 
    };

    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        displayLetters.parentNode.removeChild(displayLetters);
        showClue.innerHTML = '';
        play();
    }
        }
    
