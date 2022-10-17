import { APIURL } from '../common/varriables';
import localStrg from '../localStorage/localStrg';
import { PAGE } from '../pagination-js/main-pagination';
let lang = 'ua';
export async function fetchPopular(token) {
  let pageLang = localStorage.getItem('lang');
    if (pageLang === 'ua') {
      lang = `uk`;
    } else {
      lang = `en`;
    }
  return await (
    await fetch(APIURL + `3/trending/movie/day?api_key=${token}&language=${lang}&page=${PAGE}`)
  ).json();
}

export async function fetchGenresList(token, lang) {

    const response = await (await fetch(APIURL+`3/genre/movie/list?api_key=${token}&language=${lang}`)).json();
    localStrg.save("genresList",response.genres);
    console.log("Genres were updated, and saved to localStorage for future");
    return response.genres;
}

export async function fetchSearch(token, name, lang) {  
  let pageLang = localStorage.getItem('lang');
    if (pageLang === 'en') {
      lang = `en`;
    } else {
      lang = `uk`;
    }
    const response = await (await fetch(APIURL+`3/search/movie?api_key=${token}&language=e${lang}&query=${name}`)).json()
    return response
}

/* функция расширенного запроса с учетом жанра, года релиза,  ключевого слова */
export async function fetchExtendedSearch(
  token,
  genre = 'none',
  year = 0,
  keyword = 0
) {
  let lang = localStorage.getItem('lang');
  if (lang === 'en') {
    lang = `en`;
  } else {
    lang = `uk`;
  }

  let apiString = APIURL + `3/discover/movie?api_key=${token}&language=${lang}`;
  if (year) {
    apiString = apiString + `&primary_release_year=${year}`;
  }
  if (genre !== 'none') {
    apiString = apiString + `&with_genres=${genre}`;
  }
  if (keyword) {
    apiString = apiString + `&with_keywords=${keyword}`;
  }
  const response = await (await fetch(apiString)).json();
  return response;
}
/* функция поска ключевого слова */
export async function fetchKeyWordsSearch(token, query) {
  const response = await (
    await fetch(
      APIURL + `3/search/keyword?api_key=${token}&language=en-US&query=${query}`
    )
  ).json();
  return response;
}
