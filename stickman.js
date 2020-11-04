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

        }
    
