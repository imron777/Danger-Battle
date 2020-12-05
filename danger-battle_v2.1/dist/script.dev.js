"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var character = document.querySelectorAll('.character__img'),
      btn = document.querySelector('.btn__link'),
      modalWindowDanger = document.querySelector('.modalWindowDanger'),
      modalWindowAcute = document.querySelector('.modalWindowAcute'),
      gameOver = document.querySelector('.gameOver'),
      body = document.querySelector('body'),
      reload_btn = document.querySelector('.reload-btn'),
      help__close = document.querySelector('[data-close]'),
      help = document.querySelector('.help'),
      chooseCharacter = document.querySelector('.chooseCharacter'),
      chooseCharacter__elements = chooseCharacter.querySelectorAll('a'),
      container__title = document.querySelector('.container-title'),
      gameOver__loose = document.querySelector('.gameOver__loose');
  var lifeCountDanger = document.querySelector('.lifeCountDanger'),
      lifeCountAcute = document.querySelector('.lifeCountAcute'),
      character1,
      character2;
  chooseCharacter__elements.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target.className == 'chooseCharacter__first') {
        character1 = true;
        chooseCharacter.style.display = 'none';
        body.classList.remove('hide__overflow');
        body.classList.add('show__overflow');
      } else if (e.target.className == 'chooseCharacter__second') {
        character2 = true;
        chooseCharacter.style.display = 'none';
        body.classList.remove('hide__overflow');
        body.classList.add('show__overflow');
      }

      if (character1 === true) {
        var title = document.createElement('div');
        title.classList.add('title');
        title.innerHTML = 'Вы играете за персонажа под ником "Опасный!"';
        container__title.append(title);
      } else if (character2 === true) {
        var _title = document.createElement('div');

        _title.classList.add('title');

        _title.innerHTML = 'Вы играете за персонажа под ником "Острый!"';
        container__title.append(_title);
      }
    });
  });

  function showModalWindow() {
    character.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var target = e.target;

        if (target.alt == 'leftCharacter') {
          modalWindowDanger.classList.toggle('hide');
        } else if (target.alt == 'rightCharacter') {
          modalWindowAcute.classList.toggle('hide');
        }
      });
    });
  }

  showModalWindow();
  var randomNumber;
  var YouLose = 'Вы проиграли &#9785;',
      YouWon = 'Вы выиграли &#9786;';

  function randomPunch(randomNumber, lifeCountDanger, lifeCountAcute, gameOver, YouLose) {
    btn.addEventListener('click', function () {
      randomNumber = Math.floor(Math.random() * 2);

      if (randomNumber === 0) {
        updateLifeForLeft();
      } else {
        updateLifeForRight();
      }

      if (lifeCountDanger.innerText <= 0) {
        gameOver.classList.toggle('hide');
        body.style.overflow = 'hidden';

        if (character1 === true) {
          gameOver__loose.innerHTML += YouLose;
          new Audio("sounds/gameOver.mp3").play();
        } else {
          gameOver__loose.innerHTML += YouWon;
          new Audio("sounds/youWon.mp3").play();
        }
      } else if (lifeCountAcute.innerText <= 0) {
        gameOver.classList.toggle('hide');
        body.style.overflow = 'hidden';

        if (character2 === true) {
          gameOver__loose.innerHTML += YouLose;
          new Audio("sounds/gameOver.mp3").play();
        } else {
          gameOver__loose.innerHTML += YouWon;
          new Audio("sounds/youWon.mp3").play();
        }
      }
    });
    var modalWindowForDanger = Math.floor(Math.random() * (30 - 6)) + 6; // Число выбирается рандомно 6 до 30

    var modalWindowForAcute = Math.floor(Math.random() * (25 - 5)) + 5; // Число выбирается рандомно от 5 до 25

    function updateLifeForLeft() {
      lifeCountDanger.innerHTML = lifeCountDanger.innerText - modalWindowForDanger;
    } // От текущего числа отнимается рандомное число от 6 до 30


    function updateLifeForRight() {
      lifeCountAcute.innerHTML = lifeCountAcute.innerText - modalWindowForAcute;
    } // От текущего числа отнимается рандомное число от 5 до 25

  }

  randomPunch(randomNumber, lifeCountDanger, lifeCountAcute, gameOver, YouLose, YouWon);
  reload_btn.addEventListener('click', function () {
    window.location.reload();
  }); // При клике на кнопку страница перезагружается

  help__close.addEventListener('click', function () {
    help.classList.add('hide');
  }); // При клике закрывается элемент с подсказками
});