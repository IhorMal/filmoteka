import { PAGE } from './main-pagination';
import { pageCount } from '../index-page/search';

//////////////////////////// УБИРАЮ ИЛИ СТАВЛЮ  "..."

export function ellipsis() {
  const refs = {
    firstPage: document.querySelector('#firstPage'),
    lastPage: document.querySelector('#lastPag'),
    ellipsisStart: document.querySelector('#ellipsisStart'),
    ellipsisEnd: document.querySelector('#ellipsisEnd'),
  };

  if (refs.firstPage.textContent > 2) {
    refs.ellipsisStart.classList.remove('visually-hidden');
  }

  if (refs.lastPage.textContent >= pageCount - 1) {
    refs.ellipsisEnd.classList.add('visually-hidden');
    return;
  }
  refs.ellipsisEnd.classList.remove('visually-hidden');
}

//................. ДЕЛФЮ КНОПКУ НЕ АКТИВНОЙ
export function disaibledBtn() {
  const refs = {
    leftBtn: document.querySelector('.btn-left'),
    rightBtn: document.querySelector('.btn-right'),
  };

  if (PAGE > 1) {
    refs.leftBtn.removeAttribute('disabled');
  }

  if (PAGE === pageCount) {
    refs.rightBtn.setAttribute('disabled', 'disabled');
    return;
  }

  refs.rightBtn.removeAttribute('disabled');
}

// //................ АКТИВНАЯ СТРАНИЦА

export function curentPage(e) {
  const refs = {
    activ: document.querySelector('.pagination__page--activ'),
    pagination: document.querySelector('#pagination'),
    firstPage: document.querySelector('#firstPage'),
    thirdPage: document.querySelector('#thirdPage'),
    fourthPage: document.querySelector('#fourthPage'),
    fifthPage: document.querySelector('#fifthPage'),
    lastPag: document.querySelector('#lastPag'),
    preFirstPage: document.querySelector('#preFirstPage'),
    preLastPag: document.querySelector('#preLastPag'),
  };

  if (refs.activ) {
    refs.activ.classList.remove('pagination__page--activ');
  }

  if (refs.firstPage && PAGE == refs.firstPage.textContent) {
    refs.firstPage.classList.add('pagination__page--activ');
  }
  if (refs.thirdPage && PAGE == refs.thirdPage.textContent) {
    refs.thirdPage.classList.add('pagination__page--activ');
  }
  if (refs.fourthPage && PAGE == refs.fourthPage.textContent) {
    refs.fourthPage.classList.add('pagination__page--activ');
  }
  if (refs.fifthPage && PAGE == refs.fifthPage.textContent) {
    refs.fifthPage.classList.add('pagination__page--activ');
  }

  if (refs.lastPag && PAGE == refs.lastPag.textContent) {
    refs.lastPag.classList.add('pagination__page--activ');
  }

  if (refs.preFirstPage && PAGE == refs.preFirstPage.textContent) {
    refs.preFirstPage.classList.add('pagination__page--activ');
  }

  if (refs.preLastPag && PAGE == refs.preLastPag.textContent) {
    refs.preLastPag.classList.add('pagination__page--activ');
  }
}
