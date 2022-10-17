import { processCurrentPage } from '../data-processing/processCurrentPage';
import { APIKEY,APIURL } from '../common/varriables';
import { renderItems } from '../common/renderItems';
import { PAGE } from './main-pagination';
import { searchQueryPagination } from '../index-page/search';

import { getPopularMovies } from '../index-page/search';
import goTopBtn from '../common/goTopBtn';
import Spinner from '../common/spinner';
const spin = new Spinner();

export async function searchMoviesPagination(event) {
  event.preventDefault();
  const searchResult = await getSearchMoviesPagination();
  const currentPageContent = await processCurrentPage(searchResult);

  if (currentPageContent.length) {
    renderItems(currentPageContent);
    spin.spinOff();
    goTopBtn();
    return;
  }
}

async function getSearchMoviesPagination() {
  const popularMovies = await fetchSearchPagination(APIKEY);
  return popularMovies.results;
}

async function fetchSearchPagination(token) {
  const response = await (
    await fetch(
      APIURL +
        `3/search/movie?api_key=${token}&language=en-US&query=${searchQueryPagination}&page=${PAGE}`
    )
  ).json();
  return response;
}

export async function renderPopularMoviesPagination() {
  const popularMovies = await getPopularMovies(APIKEY);
  const currentPageContent = await processCurrentPage(popularMovies);

  renderItems(currentPageContent);
  spin.spinOff();
  goTopBtn();
}
