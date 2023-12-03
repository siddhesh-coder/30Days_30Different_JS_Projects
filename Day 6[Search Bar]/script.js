const search = document.getElementById('input');
const suggest = document.querySelector('.suggestions');

let citiesDatabase = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

async function grabCities(){ //grab API Call
    try {
        let dataBase = await fetch(citiesDatabase);
        let takeBase = await dataBase.json();
        return takeBase;
    } catch (error) {
        alert(error);
    }
}

async function findMatches(word){  //Apply filter on data, to get our search

     let cities = await grabCities();

     return cities.filter((place)=>{
        const regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
     });
}

function debounce(fn,t){ //debounce function
    let timeOutId;

    return function(){
        const context = this;
        const args = arguments;

        clearTimeout(timeOutId);

        timeOutId = setTimeout(()=>{
            fn.apply(context, args);
        },t);
    };
};

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function display(){ //display content on window
    const searchTerm = this.value.trim(); //it will delete the spaces in string
 
   if(searchTerm !== ''){ //if value is empty then it will not enter

      const matchArray = findMatches(this.value); //give value for filteration

      matchArray.then(matches => {

         if(matches.length > 0){ //if match is empty it will give no match found
            const html = matches.map((place)=>{
                const regex = new RegExp(this.value, 'gi');
                const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
                const StateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    
                return `
                <li>
                <span class="name">${cityName}, ${StateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
                </li>`;
    
              }).join('');
    
              suggest.innerHTML = html;
         }else{
            suggest.innerHTML = '<li>Match not found</li>';
         }
      }).catch(error => {
          alert(error);
      });

    }else {
        suggest.innerHTML = `<li>Filter for a city</li>
        <li>or a state</li>`;
    }
}

const debounceFn = debounce(display,300);

search.addEventListener('keyup', debounceFn);