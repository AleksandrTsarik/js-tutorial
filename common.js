'use strict'


const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
const personalMoveDB = {
   count: numberOfFilms,
   movise: {},
   actors: {},
   geners: [],
   private: false,
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('на сколько Вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('на сколько Вы его оцените?', '');

personalMoveDB.movise[a] = b;
personalMoveDB.movise[c] = d;

console.log(personalMoveDB);