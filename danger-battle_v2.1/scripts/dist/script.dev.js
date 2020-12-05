"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.btn__link'),
      gameOver = document.querySelector('.gameOver'),
      body = document.querySelector('body'),
      reload_btn = document.querySelector('.reload-btn'),
      help__close__item = document.querySelector('[data-close]'),
      help = document.querySelector('.help'),
      chooseCharacter = document.querySelector('.chooseCharacter'),
      chooseCharacter__elements = chooseCharacter.querySelectorAll('a'),
      container__title = document.querySelector('.container-title'),
      gameOver__loose = document.querySelector('.gameOver__loose');
  var lifeCountDanger, lifeCountBiker, lifeCountNinja, character1, character2, character3;

  var Character =
  /*#__PURE__*/
  function () {
    function Character(charactersLife, lifeCount, numberOfLifes, charactersLifeIcon, altForIcon, srcForImg, altForImg, name) {
      _classCallCheck(this, Character);

      this.charactersLife = charactersLife;
      this.lifeCount = lifeCount;
      this.numberOfLifes = numberOfLifes;
      this.charactersLifeIcon = charactersLifeIcon;
      this.altForIcon = altForIcon;
      this.srcForImg = srcForImg;
      this.altForImg = altForImg;
      this.name = name;
    }

    _createClass(Character, [{
      key: "create",
      value: function create(place) {
        var element = document.createElement('div');
        var appendPlace = document.querySelector(place);
        element.innerHTML = "\n                    <div class=\"".concat(this.charactersLife, " life__item\">\n                        <span class=\"").concat(this.lifeCount, " lifeCountRight lifeCount\">").concat(this.numberOfLifes, "</span>\n                        <img class=\"").concat(this.charactersLifeIcon, " life\" src=\"img/life.png\" alt=\"").concat(this.altForIcon, "\">\n                    </div>\n\n                    <img class=\"character__img\" src=\"").concat(this.srcForImg, "\" alt=\"").concat(this.altForImg, "\">\n                    <div class=\"footer\">\n                        <div class=\"character__title\">").concat(this.name, "</div>\n                    </div>\n            ");
        appendPlace.append(element);
      }
    }]);

    return Character;
  }();

  var dangerCharacter = new Character('dangerCharactersLife', 'lifeCountDanger', 125, 'dangerCharactersLife__img', 'dangerCharactersLife', 'img/danger.jpg', 'danger', 'Danger!');
  var bikerCharacter = new Character('bikerCharactersLife', 'lifeCountBiker', 100, 'bikerCharactersLife__img', 'bikerCharactersLife', 'img/biker.jpg', 'biker', 'Biker!');
  var ninjaCharacter = new Character('ninjaCharactersLife', 'lifeCountNinja', 110, 'ninjaCharactersLife__img', 'ninjaCharactersLife', 'img/ninja.jpg', 'ninja', 'Ninja!');

  function choosePlace(placeForCharacter) {
    var lifeCountForSelected = document.querySelector(placeForCharacter);
    lifeCountForSelected.classList.remove('lifeCountRight');
    lifeCountForSelected.classList.add('lifeCountLeft');
  }

  var randomCharacter = Math.floor(Math.random() * 2);
  chooseCharacter__elements.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target.className == 'chooseCharacter__first') {
        character1 = true;
        chooseCharacter.style.display = 'none';
        body.classList.remove('hide__overflow');
        dangerCharacter.create('.selectedCharacter__item');
        choosePlace('.lifeCountDanger');

        if (randomCharacter === 0) {
          bikerCharacter.create('.randomCharacter__item');
        } else {
          ninjaCharacter.create('.randomCharacter__item');
        }
      } else if (e.target.className == 'chooseCharacter__second') {
        character2 = true;
        chooseCharacter.style.display = 'none';
        body.classList.remove('hide__overflow');
        bikerCharacter.create('.selectedCharacter__item');
        choosePlace('.lifeCountBiker');

        if (randomCharacter === 0) {
          dangerCharacter.create('.randomCharacter__item');
        } else {
          ninjaCharacter.create('.randomCharacter__item');
        }
      } else if (e.target.className == 'chooseCharacter__third') {
        character3 = true;
        chooseCharacter.style.display = 'none';
        body.classList.remove('hide__overflow');
        ninjaCharacter.create('.selectedCharacter__item');
        choosePlace('.lifeCountNinja');

        if (randomCharacter === 0) {
          bikerCharacter.create('.randomCharacter__item');
        } else {
          dangerCharacter.create('.randomCharacter__item');
        }
      }

      if (character1 === true) {
        creatingCharacter('Вы играете за персонажа под ником "Danger!"');
      } else if (character2 === true) {
        creatingCharacter('Вы играете за персонажа под ником "Biker!"');
      } else if (character3 === true) {
        creatingCharacter('Вы играете за персонажа под ником "Ninja!"');
      }
    });
  });
  var randomNumber;

  function creatingCharacter(titleText) {
    var title = document.createElement('div');
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
    var YouLose = 'Вы проиграли &#9785;',
        YouWon = 'Вы выиграли &#9786;';
    btn.addEventListener('click', function () {
      randomNumber = Math.floor(Math.random() * 2);
      lifes();

      if (randomNumber === 0) {
        if (character1 === true) {
          updateLifeForDanger();
        } else if (character2 === true) {
          updateLifeForBiker();
        } else if (character3 === true) {
          updateLifeForNinja();
        }
      } else {
        if (character1 === true) {
          if (bikerCharactersLife) {
            updateLifeForBiker();
          } else if (ninjaCharactersLife) {
            updateLifeForNinja();
          }
        } else if (character2 === true) {
          if (dangerCharactersLife) {
            updateLifeForDanger();
          } else if (ninjaCharactersLife) {
            updateLifeForNinja();
          }
        } else if (character3 === true) {
          if (bikerCharactersLife) {
            updateLifeForBiker();
          } else if (dangerCharactersLife) {
            updateLifeForDanger();
          }
        }
      }

      if (lifeCountDanger != null && lifeCountDanger != undefined) {
        gameOverFunction(lifeCountDanger, gameOver, body, character1);
      }

      if (lifeCountBiker != null && lifeCountBiker != undefined) {
        gameOverFunction(lifeCountBiker, gameOver, body, character2);
      }

      if (lifeCountForNinja != null && lifeCountNinja != undefined) {
        gameOverFunction(lifeCountNinja, gameOver, body, character3);
      }
    });

    function gameOverFunction(lifeCounting, gameOver, body, testingCharacter) {
      if (lifeCounting.innerText <= 0) {
        gameOver.classList.remove('hide');
        body.style.overflow = 'hidden';

        if (testingCharacter) {
          gameOver__loose.innerHTML += YouLose;
          new Audio("sounds/gameOver.mp3").play();
        } else {
          gameOver__loose.innerHTML += YouWon;
          new Audio("sounds/youWon.mp3").play();
        }
      }
    }

    var lifeCountForDanger = Math.floor(Math.random() * (30 - 6)) + 6; // Число выбирается рандомно 6 до 30

    var lifeCountForBiker = Math.floor(Math.random() * (25 - 5)) + 5; // Число выбирается рандомно от 5 до 25

    var lifeCountForNinja = Math.floor(Math.random() * (27 - 6)) + 6; // Число выбирается рандомно от 5.5 до 27

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
  reload_btn.addEventListener('click', function () {
    window.location.reload();
  }); // При клике на кнопку страница перезагружается

  help__close__item.addEventListener('click', function () {
    help.classList.add('hide');
  }); // При клике закрывается элемент с подсказками
});