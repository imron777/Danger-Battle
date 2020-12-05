window.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelectorAll('.character__img'),
        btn = document.querySelector('.btn__link'),
        modalWindowLeft = document.querySelector('.modalWindowLeft'),
        modalWindowRight = document.querySelector('.modalWindowRight'),
        gameOver = document.querySelector('.gameOver'),
        body = document.querySelector('body'),
        reload_btn = document.querySelector('.reload-btn'),
        snd = new Audio("gameOver.mp3"),
        help__close = document.querySelector('[data-close]'),
        help = document.querySelector('.help'),
        chooseCharacter = document.querySelector('.chooseCharacter'),
        chooseCharacter__elements = chooseCharacter.querySelectorAll('a'),
        container__title = document.querySelector('.container-title'),
        gameOver__loose = document.querySelector('.gameOver__loose');

    let lifeCountLeft = document.querySelector('.lifeCountLeft'),
        lifeCountRight = document.querySelector('.lifeCountRight'),
        character1,
        character2;

    chooseCharacter__elements.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.className == 'chooseCharacter__first') {
                character1 = true;
                chooseCharacter.style.display = 'none';
                body.classList.remove('hide__overflow');
                body.classList.add('show__overflow');
                
            } 
            else if (e.target.className == 'chooseCharacter__second') {
                character2 = true;
                chooseCharacter.style.display = 'none';
                body.classList.remove('hide__overflow');
                body.classList.add('show__overflow');
                
            }

            if(character1 == true) {
                const title = document.createElement('div');
                title.classList.add('title');
                title.innerHTML = 'Вы играете за персонажа под ником "Опасный!"';
                container__title.append(title);
                
            }
            else if(character2 == true) {
                const title = document.createElement('div');
                title.classList.add('title');
                title.innerHTML = 'Вы играете за персонажа под ником "Острый!"';
                container__title.append(title);
            }
        });
    });
    

    function showModalWindow() {
        character.forEach(item => {
            item.addEventListener('click', (e) => {
                let target = e.target;
                if(target.alt == 'leftCharacter') {
                    modalWindowLeft.classList.toggle('hide');
                }
                else if (target.alt == 'rightCharacter') {
                    modalWindowRight.classList.toggle('hide');
                }
            });
        });
    }
    showModalWindow();

    let randomNumber;
    function randomPunch(randomNumber, lifeCountLeft, lifeCountRight, gameOver) {
        
        btn.addEventListener('click', () => {
            randomNumber = Math.floor(Math.random() * 2);
            
            if(randomNumber === 0) {
                updateLifeForLeft();
            }
            else if(randomNumber === 1) {
                updateLifeForRight();
            }

            if(lifeCountLeft.innerText <= 0 || lifeCountRight.innerText <= 0) { 
                snd.play();
                gameOver.classList.toggle('hide');
                body.style.overflow = 'hidden';

                if(lifeCountLeft.innerText <= 0) {
                    if(character1 == true) {
                        gameOver__loose.innerHTML += 'Вы проиграли &#9785;';
                    } else {
                        gameOver__loose.innerHTML += 'Вы выиграли &#9786;';
                    }
                }
                else if(lifeCountRight.innerText <= 0) {
                    if(character2 == true) {
                        gameOver__loose.innerHTML += 'Вы проиграли &#9785;';
                    } else {
                        gameOver__loose.innerHTML += 'Вы выиграли &#9786;';
                    }
                }
            }
        });
        
        const lifeCount = Math.floor(Math.random() * (25 - 5)) + 5;
        
        function updateLifeForLeft() {
            
            lifeCountLeft.innerHTML = lifeCountLeft.innerText - lifeCount;
        }
        function updateLifeForRight() {
            lifeCountRight.innerHTML = lifeCountRight.innerText - lifeCount;
        }
    }
    randomPunch(randomNumber, lifeCountLeft, lifeCountRight, gameOver);


    reload_btn.addEventListener('click', () => {
        window.location.reload()
    });

    help__close.addEventListener('click', () => {
        help.classList.add('hide');
    });
});