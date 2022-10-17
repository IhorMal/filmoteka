import { langCurrent } from '../lang/changeLang';
import {fetchGenresList} from './themoviedbAPI';
import { APIKEY } from '../common/varriables';
import localStrg from '../localStorage/localStrg';

let currentRenderLang=langCurrent();

export function filterRenderYear() {

const yearsListElem = document.querySelector('.js-filter-years');
yearsListElem.innerHTML='';
let lang = langCurrent();
let allYears = 'All Years';

if (langCurrent()=='ua'){
    allYears = 'Усі роки';
    lang = 'uk';
}

let startYear = 1907;
let endYear = new Date().getFullYear();
const yearsList = () => {
  let str = `<option class="js-filter-year" value="" selected>${allYears}</option>`;
  for (let i = endYear; i >= startYear; i -= 1) {
    str += `<option value="${i}">${i}</option>`;
  }
  return str;
};
yearsListElem.innerHTML = yearsList();
}

export async function filterRenderGenre() {

    const genresListElem = document.querySelector('.js-filter-genres');
    genresListElem.innerHTML='';

    let lang = langCurrent();
    let allGenres = 'All Genres';
    let genreList = [];
    
    if (langCurrent()=='ua'){
      allGenres = 'Усі жанри';
      lang = 'uk';
  } 
    
  if (currentRenderLang!==langCurrent()||!localStrg.load('genresList'))  {
    genreList = await fetchGenresList(APIKEY,lang); 
    currentRenderLang=langCurrent();
    } else { 
    genreList = localStrg.load('genresList');
  } 
    let str = `<option class="js-filter-genres--default" value="" selected>${allGenres}</option>`;

    str+=genreList.map(elem=>{return `<option value="${elem.id}">${elem.name}</option>`}).join('');

    genresListElem.innerHTML = str;
}
