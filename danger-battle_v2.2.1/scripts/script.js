window.addEventListener('DOMContentLoaded', () => {    
    const btn = document.querySelector('.btn__link'),
        gameOver = document.querySelector('.gameOver'),
        reload_btn = document.querySelector('.reload-btn'),
        help__close__item = document.querySelector('[data-close]'),
        help = document.querySelector('.help'),
        chooseCharacter = document.querySelector('.chooseCharacter'),
        chooseCharacter__elements = chooseCharacter.querySelectorAll('a'),
        container__title = document.querySelector('.container-title'),
        gameOver__loose = document.querySelector('.gameOver__loose'),
        randomCharacter = Math.floor(Math.random() * 2),
        mainContent = document.querySelector('.mainContent'),
        charactersContainer = document.querySelector('.charactersContainer');

    let lifeCountDanger,
        lifeCountBiker,
        lifeCountNinja,
        character1,
        character2,
        character3,
        randomNumber,
        lifeCountForDanger,
        lifeCountForBiker,
        lifeCountForNinja;

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
        130,
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

        function chooseCharacterFunction(createdCharacter) {
            chooseCharacter.style.display = 'none';
            mainContent.style.display = 'block';
            createdCharacter.create('.selectedCharacter__item');
        }

    chooseCharacter__elements.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.className == 'chooseCharacter__first') {
                character1 = true;
                chooseCharacterFunction(dangerCharacter);
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
                chooseCharacterFunction(bikerCharacter);
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
                chooseCharacterFunction(ninjaCharacter);
                choosePlace('.lifeCountNinja');
                
                if(randomCharacter === 0) {
                    bikerCharacter.create('.randomCharacter__item');
                }

                else {
                    dangerCharacter.create('.randomCharacter__item');
                }
            }

            if(character1) {
                creatingCharacter('Вы играете за персонажа под ником "Danger!"');
            }

            else if(character2) {
                creatingCharacter('Вы играете за персонажа под ником "Biker!"');
            }

            else if(character3) {
                creatingCharacter('Вы играете за персонажа под ником "Ninja!"')
            }
        });
    });


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


    function randomPunch(randomNumber, lifeCountForDanger, lifeCountForBiker, lifeCountForNinja) {
        const YouLose = 'Вы проиграли &#9785;',
        YouWon = 'Вы выиграли &#9786;';
        
        btn.addEventListener('click', () => {
            randomNumber = Math.floor(Math.random() * 2);
            lifes();
            
            if(randomNumber === 0) {
                if(character1) {
                    updateLifeForAll(lifeCountForDanger, 30, 6, lifeCountDanger);
                }

                else if(character2) {
                    updateLifeForAll(lifeCountForBiker, 22, 4, lifeCountBiker);
                }

                else if(character3) {
                    updateLifeForAll(lifeCountForNinja, 27, 6, lifeCountNinja);
                }
            }

            
            else {
                if(character1) {
                    if(bikerCharactersLife) {
                        updateLifeForAll(lifeCountForBiker, 22, 4, lifeCountBiker);
                    }

                    else if(ninjaCharactersLife) {
                        updateLifeForAll(lifeCountForNinja, 27, 6, lifeCountNinja);
                    }
                }

                else if(character2) {
                    if(dangerCharactersLife) {
                        updateLifeForAll(lifeCountForDanger, 30, 6, lifeCountDanger);
                    }
                    
                    else if(ninjaCharactersLife) {
                        updateLifeForAll(lifeCountForNinja, 27, 6, lifeCountNinja);
                    }
                }

                else if(character3) {
                    if(bikerCharactersLife) {
                        updateLifeForAll(lifeCountForBiker, 22, 4, lifeCountBiker);
                    }

                    else if(dangerCharactersLife) {
                        updateLifeForAll(lifeCountForDanger, 30, 6, lifeCountDanger);
                    }
                }
            }

            
            if(lifeCountDanger != null && lifeCountDanger != undefined) {
                gameOverFunction(lifeCountDanger, gameOver, character1);
            }
            
            if(lifeCountBiker != null && lifeCountBiker != undefined) {
                gameOverFunction(lifeCountBiker, gameOver, character2);
            }

            if(lifeCountNinja != null && lifeCountNinja != undefined) {
                gameOverFunction(lifeCountNinja, gameOver, character3);
                console.log(lifeCountNinja);
                
            }
        });
        
        function gameOverFunction(lifeCounting, gameOver, testingCharacter) {
            if(lifeCounting.innerText <= 0) {
                gameOver.classList.remove('hide');
                charactersContainer.classList.add('hide');
                if(testingCharacter) {
                    gameOver__loose.innerHTML += YouLose;
                    new Audio("sounds/gameOver.mp3").play();
                } 
                
                else {
                    gameOver__loose.innerHTML += YouWon;
                    new Audio("sounds/youWon.mp3").play();
                }
            }
        }

        function updateLifeForAll(lifeCountForCharacter, maxLife, minLife, lifeCountCharacter) {
            lifeCountForCharacter = Math.floor(Math.random() * (maxLife - minLife)) + minLife;
            lifeCountCharacter.innerText -= lifeCountForCharacter;
        }
    }
    randomPunch(randomNumber, lifeCountForDanger, lifeCountForBiker, lifeCountForNinja);
    

    reload_btn.addEventListener('click', () => {
        window.location.reload()
    }); // При клике на кнопку страница перезагружается

    help__close__item.addEventListener('click', () => {
        help.classList.add('hide');
    }); // При клике закрывается элемент с подсказками
});