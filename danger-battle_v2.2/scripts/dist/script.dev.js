"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.btn__link'),
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
  var lifeCountDanger, lifeCountBiker, lifeCountNinja, character1, character2, character3, randomNumber, lifeCountForDanger, lifeCountForBiker, lifeCountForNinja;

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

  var dangerCharacter = new Character('dangerCharactersLife', 'lifeCountDanger', 130, 'dangerCharactersLife__img', 'dangerCharactersLife', 'img/danger.jpg', 'danger', 'Danger!');
  var bikerCharacter = new Character('bikerCharactersLife', 'lifeCountBiker', 100, 'bikerCharactersLife__img', 'bikerCharactersLife', 'img/biker.jpg', 'biker', 'Biker!');
  var ninjaCharacter = new Character('ninjaCharactersLife', 'lifeCountNinja', 110, 'ninjaCharactersLife__img', 'ninjaCharactersLife', 'img/ninja.jpg', 'ninja', 'Ninja!');

  function choosePlace(placeForCharacter) {
    var lifeCountForSelected = document.querySelector(placeForCharacter);
    lifeCountForSelected.classList.remove('lifeCountRight');
    lifeCountForSelected.classList.add('lifeCountLeft');
  }

  function chooseCharacterFunction(createdCharacter) {
    chooseCharacter.style.display = 'none';
    mainContent.style.display = 'block';
    createdCharacter.create('.selectedCharacter__item');
  }

  chooseCharacter__elements.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target.className == 'chooseCharacter__first') {
        character1 = true;
        chooseCharacterFunction(dangerCharacter);
        choosePlace('.lifeCountDanger');

        if (randomCharacter === 0) {
          bikerCharacter.create('.randomCharacter__item');
        } else {
          ninjaCharacter.create('.randomCharacter__item');
        }
      } else if (e.target.className == 'chooseCharacter__second') {
        character2 = true;
        chooseCharacterFunction(bikerCharacter);
        choosePlace('.lifeCountBiker');

        if (randomCharacter === 0) {
          dangerCharacter.create('.randomCharacter__item');
        } else {
          ninjaCharacter.create('.randomCharacter__item');
        }
      } else if (e.target.className == 'chooseCharacter__third') {
        character3 = true;
        chooseCharacterFunction(ninjaCharacter);
        choosePlace('.lifeCountNinja');

        if (randomCharacter === 0) {
          bikerCharacter.create('.randomCharacter__item');
        } else {
          dangerCharacter.create('.randomCharacter__item');
        }
      }

      if (character1) {
        creatingCharacter('Вы играете за персонажа под ником "Danger!"');
      } else if (character2) {
        creatingCharacter('Вы играете за персонажа под ником "Biker!"');
      } else if (character3) {
        creatingCharacter('Вы играете за персонажа под ником "Ninja!"');
      }
    });
  });

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

  function randomPunch(randomNumber, lifeCountForDanger, lifeCountForBiker, lifeCountForNinja) {
    var YouLose = 'Вы проиграли &#9785;',
        YouWon = 'Вы выиграли &#9786;';
    btn.addEventListener('click', function () {
      randomNumber = Math.floor(Math.random() * 2);
      lifes();

      if (randomNumber === 0) {
        if (character1) {
          updateLifeForAll(lifeCountForDanger, 30, 6, lifeCountDanger);
        } else if (character2) {
          updateLifeForAll(lifeCountForBiker, 22, 4, lifeCountBiker);
        } else if (character3) {
          updateLifeForAll(lifeCountForNinja, 27, 6, lifeCountNinja);
        }
      } else {
        if (character1) {
          if (bikerCharactersLife) {
            updateLifeForAll(lifeCountForBiker, 22, 4, lifeCountBiker);
          } else if (ninjaCharactersLife) {
            updateLifeForAll(lifeCountForNinja, 27, 6, lifeCountNinja);
          }
        } else if (character2) {
          if (dangerCharactersLife) {
            updateLifeForAll(lifeCountForDanger, 30, 6, lifeCountDanger);
          } else if (ninjaCharactersLife) {
            updateLifeForAll(lifeCountForNinja, 27, 6, lifeCountNinja);
          }
        } else if (character3) {
          if (bikerCharactersLife) {
            updateLifeForAll(lifeCountForBiker, 22, 4, lifeCountBiker);
          } else if (dangerCharactersLife) {
            updateLifeForAll(lifeCountForDanger, 30, 6, lifeCountDanger);
          }
        }
      }

      if (lifeCountDanger != null && lifeCountDanger != undefined) {
        gameOverFunction(lifeCountDanger, gameOver, character1);
      }

      if (lifeCountBiker != null && lifeCountBiker != undefined) {
        gameOverFunction(lifeCountBiker, gameOver, character2);
      }

      if (lifeCountNinja != null && lifeCountNinja != undefined) {
        gameOverFunction(lifeCountNinja, gameOver, character3);
        console.log(lifeCountNinja);
      }
    });

    function gameOverFunction(lifeCounting, gameOver, testingCharacter) {
      if (lifeCounting.innerText <= 0) {
        gameOver.classList.remove('hide');
        charactersContainer.classList.add('hide');

        if (testingCharacter) {
          gameOver__loose.innerHTML += YouLose;
          new Audio("sounds/gameOver.mp3").play();
        } else {
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
  reload_btn.addEventListener('click', function () {
    window.location.reload();
  }); // При клике на кнопку страница перезагружается

  help__close__item.addEventListener('click', function () {
    help.classList.add('hide');
  }); // При клике закрывается элемент с подсказками
});