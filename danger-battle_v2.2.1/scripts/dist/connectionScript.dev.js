"use strict";

window.addEventListener('DOMContentLoaded', function () {
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
  var lifeCountDanger, lifeCountBiker, character1, character2;
});