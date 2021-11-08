'use strict'


const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
const personalMoveDB = {
   count: numberOfFilms,
   movise: {},
   actors: {},
   geners: [],
   private: false,
};

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
console.log(personalMoveDB);

   if (personalMoveDB.count < 10 && personalMoveDB.count != null && personalMoveDB.count != '' ) {
      alert('Просмотренно довольно мало фильмов');
   } else if ( personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
      alert('Вы классический зритель');
   } else if(personalMoveDB.count >= 30 ){
      alert('Вы киноман');
   }else{
      alert('Произошла ошибка')
   };
