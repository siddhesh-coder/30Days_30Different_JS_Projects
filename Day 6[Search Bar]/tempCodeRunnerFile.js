let citiesDatabase = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// async function grabCities(){
//     try {
//         let dataBase = await fetch(citiesDatabase);
//         let takeBase = await dataBase.json();
//         return takeBase;
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function findMatches(word){
//      let cities = await grabCities();
//      return cities.filter((place)=>{
//         const regex = new RegExp(word, 'gi');
//         return place.city.match(regex) || place.state.match(regex);
//      });
// }

// findMatches('aus').then(matches => {
//     console.log(matches);
// }).catch(error => {
//     console.error(error);
// });

// function display(){

// }
