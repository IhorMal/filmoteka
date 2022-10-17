import { startPage } from '../pagination-js/counter-pagination';
import { processCurrentPage } from '../data-processing/processCurrentPage';
import { getPopularMovies } from '../index-page/search';
import { renderItems } from '../common/renderItems';
import { APIKEY } from '../common/varriables';
import Spinner from '../common/spinner';

const spin = new Spinner();

export async function renderPopularMovies() {
  spin.spinOn();
  const popularMovies = await getPopularMovies(APIKEY);
  const currentPageContent = await processCurrentPage(popularMovies);
  spin.spinOff();
  renderItems(currentPageContent);

  startPage();
}
