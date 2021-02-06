"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var characters = document.querySelectorAll('.character__img'),
    btn = document.querySelector('.btn__link'),
    modalWindowDanger = document.querySelector('.modalWindowDanger'),
    modalWindowBiker = document.querySelector('.modalWindowBiker'),
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
      element.innerHTML = "\n                <div class=\"".concat(this.charactersLife, " life__item\">\n                    <span class=\"").concat(this.lifeCount, " lifeCountRight lifeCount\">").concat(this.numberOfLifes, "</span>\n                    <img class=\"").concat(this.charactersLifeIcon, " life\" src=\"img/life.png\" alt=\"").concat(this.altForIcon, "\">\n                </div>\n\n                <a href=\"#\"><img class=\"character__img\" src=\"").concat(this.srcForImg, "\" alt=\"").concat(this.altForImg, "\"></a>\n                <div class=\"footer\">\n                    <div class=\"character__title\">").concat(this.name, "</div>\n                </div>\n        ");
      appendPlace.append(element);
    }
  }]);

  return Character;
}();

var dangerCharacter = new Character('dangerCharactersLife', 'lifeCountDanger', 125, 'dangerCharactersLife__img', 'dangerCharactersLife', 'img/danger.jpg', 'danger', 'Danger!');
var bikerCharacter = new Character('bikerCharactersLife', 'lifeCountBiker', 100, 'bikerCharactersLife__img', 'bikerCharactersLife', 'img/biker.jpg', 'biker', 'Biker!');
var ninjaCharacter = new Character('ninjaCharactersLife', 'lifeCountNinja', 110, 'ninjaCharactersLife__img', 'ninjaCharactersLife', 'img/ninja.jpg', 'ninja', 'Ninja!');
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

    function creatingCharacter(titleText) {
      var title = document.createElement('div');
      title.classList.add('title');
      title.innerHTML = titleText;
      container__title.append(title);
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