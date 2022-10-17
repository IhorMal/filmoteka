import { fetchSearch } from './themoviedbAPI';
import { processCurrentPage } from '../data-processing/processCurrentPage';
import { APIKEY, refs } from '../common/varriables';
import { startPage } from '../pagination-js/counter-pagination';
import { renderItems } from '../common/renderItems';
import { renderPopularMovies } from './renderPopularMovies';
import localStrg from '../localStorage/localStrg';
import { fetchPopular } from './themoviedbAPI';
import { decodeGenres } from '../data-processing/decodeGenres';
import Spinner from '../common/spinner';

import { adaptivPage } from '../pagination-js/counter-pagination';

/* расширенный поиск */
import { fetchExtendedSearch } from './themoviedbAPI';

const spin = new Spinner();
const paginationDiv = document.querySelector('#pagination');
export let pageCount;
export let searchQueryPagination;

let searchQuery = '';

export async function searchMovies(event) {
  event.preventDefault();
  spin.spinOn();
  searchQuery = event.target.search.value;
  refs.searchResultText.classList.add('visually-hidden');

  if (!searchQuery) {
    renderPopularMovies();
    searchQueryPagination = '';
    spin.spinOff();
    return;
  }

  const searchResult = await getSearchMovies();
  const currentPageContent = await processCurrentPage(searchResult);

  if (searchResult.length) {
    searchQueryPagination = event.target.search.value;
  }

  if (currentPageContent.length) {
    renderItems(currentPageContent);

    paginationDiv.innerHTML = '';

    if (pageCount > 1 && pageCount < 8) {
      adaptivPage();
    } else if (pageCount !== 1) {
      startPage();
    }

    spin.spinOff();
    return;
  }
  refs.searchResultText.classList.remove('visually-hidden');
  spin.spinOff();
}

export async function getSearchMovies() {
  const popularMovies = await fetchSearch(APIKEY, searchQuery);
  if (popularMovies.total_pages > 0) {
    pageCount = popularMovies.total_pages;
  }
  return popularMovies.results;
}

export async function getPopularMovies(APIKEY) {
  const popularMovies = await fetchPopular(APIKEY);
  if (popularMovies.total_pages > 0) {
    pageCount = popularMovies.total_pages;
  }
  return popularMovies.results;
}

/* расширенный поиск */
export async function getExtSearchMovies(APIKEY, genre, year, keyword) {
  const extSearchMovies = await fetchExtendedSearch(
    APIKEY,
    genre,
    year,
    keyword
  );

  if (extSearchMovies.total_pages > 0) {
    pageCount = extSearchMovies.total_pages;
  }
  return extSearchMovies.results;
}
