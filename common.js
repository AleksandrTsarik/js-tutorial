'use strict'


let numberOfFilms

function start() {
   numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // проверка поля на ввод данных
      numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
   }
};
start();

const personalMoveDB = {
   count: numberOfFilms,
   movise: {},
   actors: {},
   geners: [],
   private: false,
};
console.log(personalMoveDB);

function rememberMyFilms() {
   for(let i = 0; i < 2; i++){
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('на сколько Вы его оцените?', '');
            personalMoveDB.movise[a] = b;
   
      if (a.length < 50 && a != null && b!= null && a != '' && b!= ''){
         personalMoveDB.movise[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
};
//rememberMyFilms();

function detectPersonalLevel() {
   if (personalMoveDB.count < 10 && personalMoveDB.count != null && personalMoveDB.count != '' ) {
      alert('Просмотренно довольно мало фильмов');
   } else if ( personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
      alert('Вы классический зритель');
   } else if(personalMoveDB.count >= 30 ){
      alert('Вы киноман');
   }else{
      alert('Произошла ошибка')
   };
};
//detectPersonalLevel();

function showMyDB(hidden) {
   if(!hidden){
      console.log(personalMoveDB)
   }else{
      console.log('ЗАкрыто ')
   }
}
showMyDB(personalMoveDB.private);

function writeYourGenres() {
   for(let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMoveDB.geners[i - 1] = genre;
   }
}
writeYourGenres();