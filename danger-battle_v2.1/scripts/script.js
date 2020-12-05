window.addEventListener('DOMContentLoaded', () => {    
    const btn = document.querySelector('.btn__link'),
        gameOver = document.querySelector('.gameOver'),
        body = document.querySelector('body'),
        reload_btn = document.querySelector('.reload-btn'),
        help__close__item = document.querySelector('[data-close]'),
        help = document.querySelector('.help'),
        chooseCharacter = document.querySelector('.chooseCharacter'),
        chooseCharacter__elements = chooseCharacter.querySelectorAll('a'),
        container__title = document.querySelector('.container-title'),
        gameOver__loose = document.querySelector('.gameOver__loose');

    let lifeCountDanger,
        lifeCountBiker,
        lifeCountNinja,
        character1,
        character2,
        character3;

    class Character {
        constructor(charactersLife, lifeCount, numberOfLifes, charactersLifeIcon, altForIcon, srcForImg, altForImg, name) {
            this.charactersLife = charactersLife;
            this.lifeCount = lifeCount;
            this.numberOfLifes = numberOfLifes;
            this.charactersLifeIcon = charactersLifeIcon;
            this.altForIcon = altForIcon;
            this.srcForImg = srcForImg;
            this.altForImg = altForImg;
            this.name = name;
        }

        create(place) {
            const element = document.createElement('div');
            const appendPlace = document.querySelector(place);
            element.innerHTML = `
                    <div class="${this.charactersLife} life__item">
                        <span class="${this.lifeCount} lifeCountRight lifeCount">${this.numberOfLifes}</span>
                        <img class="${this.charactersLifeIcon} life" src="img/life.png" alt="${this.altForIcon}">
                    </div>

                    <img class="character__img" src="${this.srcForImg}" alt="${this.altForImg}">
                    <div class="footer">
                        <div class="character__title">${this.name}</div>
                    </div>
            `;

            appendPlace.append(element);
        }
    }

    let dangerCharacter = new Character(
        'dangerCharactersLife',
        'lifeCountDanger',
        125,
        'dangerCharactersLife__img',
        'dangerCharactersLife',
        'img/danger.jpg',
        'danger',
        'Danger!'
    );

    let bikerCharacter = new Character(
        'bikerCharactersLife',
        'lifeCountBiker',
        100,
        'bikerCharactersLife__img',
        'bikerCharactersLife',
        'img/biker.jpg',
        'biker',
        'Biker!'
    );

    let ninjaCharacter = new Character(
        'ninjaCharactersLife',
        'lifeCountNinja',
        110,
        'ninjaCharactersLife__img',
        'ninjaCharactersLife',
        'img/ninja.jpg',
        'ninja',
        'Ninja!'
    );


        function choosePlace(placeForCharacter) {
            let lifeCountForSelected = document.querySelector(placeForCharacter);
                
            lifeCountForSelected.classList.remove('lifeCountRight');
            lifeCountForSelected.classList.add('lifeCountLeft');            
        }

    let randomCharacter = Math.floor(Math.random() * 2);
    chooseCharacter__elements.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.className == 'chooseCharacter__first') {
                character1 = true;
                chooseCharacter.style.display = 'none';
                body.classList.remove('hide__overflow');
                dangerCharacter.create('.selectedCharacter__item');
                choosePlace('.lifeCountDanger');
                
                
                if(randomCharacter === 0) {
                    bikerCharacter.create('.randomCharacter__item');
                }
                else {
                    ninjaCharacter.create('.randomCharacter__item');
                }
                
            }

            else if (e.target.className == 'chooseCharacter__second') {
                character2 = true;
                chooseCharacter.style.display = 'none';
                body.classList.remove('hide__overflow');
                bikerCharacter.create('.selectedCharacter__item');
                choosePlace('.lifeCountBiker');
                
                if(randomCharacter === 0) {
                    dangerCharacter.create('.randomCharacter__item');
                }
                else {
                    ninjaCharacter.create('.randomCharacter__item');
                }
            }

            else if(e.target.className == 'chooseCharacter__third') {
                character3 = true;
                chooseCharacter.style.display = 'none';
                body.classList.remove('hide__overflow');
                ninjaCharacter.create('.selectedCharacter__item');
                choosePlace('.lifeCountNinja');
                
                if(randomCharacter === 0) {
                    bikerCharacter.create('.randomCharacter__item');
                }
                else {
                    dangerCharacter.create('.randomCharacter__item');
                }
            }

            if(character1 === true) {
                creatingCharacter('Вы играете за персонажа под ником "Danger!"');
            }
            else if(character2 === true) {
                creatingCharacter('Вы играете за персонажа под ником "Biker!"');
            }
            else if(character3 === true) {
                creatingCharacter('Вы играете за персонажа под ником "Ninja!"')
            }
        });
    });


    let randomNumber;

    function creatingCharacter(titleText) {
        const title = document.createElement('div');
        title.classList.add('title');
        title.innerHTML = titleText;
        container__title.append(title);
    }

    function lifes() {
        lifeCountDanger = document.querySelector('.lifeCountDanger');
        lifeCountBiker = document.querySelector('.lifeCountBiker');
        lifeCountNinja = document.querySelector('.lifeCountNinja');

        dangerCharactersLife = document.querySelector('.dangerCharactersLife');
        bikerCharactersLife = document.querySelector('.bikerCharactersLife');
        ninjaCharactersLife = document.querySelector('.ninjaCharactersLife');
    }

    function randomPunch(randomNumber) {
        const YouLose = 'Вы проиграли &#9785;',
        YouWon = 'Вы выиграли &#9786;';
        btn.addEventListener('click', () => {
            randomNumber = Math.floor(Math.random() * 2);
            lifes();
            
            if(randomNumber === 0) {
                if(character1 === true) {
                    updateLifeForDanger();
                }

                else if(character2 === true) {
                    updateLifeForBiker();
                }

                else if(character3 === true) {
                    updateLifeForNinja();
                }
            }

            
            else {
                if(character1 === true) {
                    if(bikerCharactersLife) {
                        updateLifeForBiker();
                    }
                    else if(ninjaCharactersLife) {
                        updateLifeForNinja();
                    }
                }

                else if(character2 === true) {
                    if(dangerCharactersLife) {
                        updateLifeForDanger();
                    }
                    else if(ninjaCharactersLife) {
                        updateLifeForNinja();
                    }
                }

                else if(character3 === true) {
                    if(bikerCharactersLife) {
                        updateLifeForBiker();
                    }
                    else if(dangerCharactersLife) {
                        updateLifeForDanger();
                    }
                }
            }

            
            if(lifeCountDanger != null && lifeCountDanger != undefined) {
                gameOverFunction(lifeCountDanger, gameOver, body, character1);
            }
            
            if(lifeCountBiker != null && lifeCountBiker != undefined) {
                gameOverFunction(lifeCountBiker, gameOver, body, character2);
            }

            if(lifeCountForNinja != null && lifeCountNinja != undefined) {
                gameOverFunction(lifeCountNinja, gameOver, body, character3);
            }
        });
        
        function gameOverFunction(lifeCounting, gameOver, body, testingCharacter) {
            if(lifeCounting.innerText <= 0) {
                gameOver.classList.remove('hide');
                body.style.overflow = 'hidden';
                if(testingCharacter) {
                    gameOver__loose.innerHTML += YouLose;
                    new Audio("sounds/gameOver.mp3").play();
                } else {
                    gameOver__loose.innerHTML += YouWon;
                    new Audio("sounds/youWon.mp3").play();
                }
            }
        }

        const lifeCountForDanger = Math.floor(Math.random() * (30 - 6)) + 6; // Число выбирается рандомно 6 до 30
        const lifeCountForBiker = Math.floor(Math.random() * (25 - 5)) + 5; // Число выбирается рандомно от 5 до 25
        const lifeCountForNinja = Math.floor(Math.random() * (27 - 6)) + 6; // Число выбирается рандомно от 5.5 до 27

        function updateLifeForDanger() {
            lifeCountDanger.innerHTML = lifeCountDanger.innerText - lifeCountForDanger;
        } // От текущего числа отнимается рандомное число от 5 до 25
        function updateLifeForBiker() {
            lifeCountBiker.innerHTML = lifeCountBiker.innerText - lifeCountForBiker;
            
        }
        function updateLifeForNinja() {
            lifeCountNinja.innerHTML = lifeCountNinja.innerText - lifeCountForNinja;
        }
    }
    randomPunch(randomNumber);
    

    reload_btn.addEventListener('click', () => {
        window.location.reload()
    }); // При клике на кнопку страница перезагружается

    help__close__item.addEventListener('click', () => {
        help.classList.add('hide');
    }); // При клике закрывается элемент с подсказками
});