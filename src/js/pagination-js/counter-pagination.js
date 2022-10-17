import { pageCount } from '../index-page/search';

import { PAGE } from './main-pagination';

import { pagMarkup } from './pagination-markup';
import { markupLastPag } from './pagination-markup';
import { markupStartPag } from './pagination-markup';
import { markupPag } from './pagination-markup';

import {controlColor} from '../common/controlColor';

const div = document.querySelector('#pagination');

////////////////////////////// СЧЕТЧИК ПАГИНАЦИИ ////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// ОТРИСОВКА ПАГИНАЦИИ  ПО СЫЛКЕ
export function renderMarkupOnClickLink(e) {
  const firstPage = document.querySelector('#firstPage');
  const lastPage = document.querySelector('#lastPag');

  const pages = {
    peg2: PAGE,
    peg3: PAGE,
    peg4: PAGE,
    peg5: PAGE,
    peg6: PAGE,
  };

  // Увиличение счетчика
  if (Number(lastPage.textContent) === PAGE) {
    incriment(pages);
  }

  // Последняя страница
  if (PAGE === pageCount || PAGE >= pageCount - 4) {
    lastPages(pages);
  }

  // Уменьшение счетчика
  if (Number(firstPage.textContent) === PAGE) {
    dicremrnt(pages);
  }

  // Отрисовка начальных страниц от 1-6
  if (PAGE === 1 || PAGE <= 5) {
    startPage(e);
  }
}

//////////////////// ОТРИСОВКА ПАГИНАЦИИ  ПО КНОПКЕ

export function renderPaginationONClickBtn(e) {
  const firstPage = document.querySelector('#firstPage');
  const lastPage = document.querySelector('#lastPag');

  const pages = {
    peg2: PAGE,
    peg3: PAGE,
    peg4: PAGE,
    peg5: PAGE,
    peg6: PAGE,
  };

  // // Последняя страница
  if (PAGE >= pageCount - 5) {
    lastPages(pages);
  }

  // увиличеник счетчика
  if (PAGE > Number(lastPage.textContent)) {
    incriment(pages);
  }

  // Отрисовка начальных страниц от 1-6
  if (PAGE <= 5) {
    startPage();
  }

  // // Уменьшение счетчика
  if (PAGE < Number(firstPage.textContent)) {
    dicremrnt(pages);
  }
}

//////////////////////////////// ОТРИСОВКА ПОСЛЕДНЕЙ СТРАНИЦИ
function lastPages(pages) {
  if (PAGE > pageCount) {
    return;
  }
  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  div.innerHTML = '';

  peg6 = pageCount - 1;
  peg5 = pageCount - 2;
  peg4 = pageCount - 3;
  peg3 = pageCount - 4;
  peg2 = pageCount - 5;

  div.innerHTML = markupLastPag(peg2, peg3, peg4, peg5, peg6);
  controlColor();
}

//////////////////////////////////// УМЕНЬШЕНИЕ СЧЕТЧИКА
function dicremrnt(pages) {
  if (PAGE <= 2) {
    return;
  }

  div.innerHTML = '';

  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  peg5 -= 1;
  peg4 -= 2;
  peg3 -= 3;
  peg2 -= 4;

  div.innerHTML = pagMarkup(peg2, peg3, peg4, peg5, peg6);
  controlColor();
}

////////////////////////////////// // УВИЛИЧЕНИЕ СЧЕТЧИКА

function incriment(pages) {
  if (PAGE >= pageCount - 1) {
    return;
  }

  div.innerHTML = '';

  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  peg3 += 1;
  peg4 += 2;
  peg5 += 3;
  peg6 += 4;

  div.innerHTML = pagMarkup(peg2, peg3, peg4, peg5, peg6);
  controlColor();
}

// //////////////////// РАЗМЕТКА ПАГИНАЦИИ ПРИ ПЕРВОМ ЗАПУСКЕ СТРАНИЦЫ (НАЧАЛЬНАЯ СТРАНИЦА)

export function startPage() {
  if (pageCount < 7) {
    return;
  }
  div.innerHTML = '';

  div.innerHTML = markupStartPag();

  const none = document.querySelector('.is-none');
  if (none) {
    none.classList.remove('is-none');
  }

  controlColor();
}

// ЕСЛИ МАКСИМАЛЬНОЕ КАЛИЧЕСТВО СТРАНИЦ МЕНЬШЕ 8 РАЗМЕТКА ДОЛЖНА БЫТЬ ДИНАМИЧЕСКОЙ

export function adaptivPage() {
  div.innerHTML = '';

  div.innerHTML = markupPag();
  const arreyId = [
    ,
    ,
    `id="firstPage"`,
    `id ='thirdPage'`,
    `id ='fourthPage'`,
    `id ='fifthPage'`,
    `id="lastPag"`,
    `id="preLastPag"`,
  ];
  const ul = document.querySelector('.pagination__list');

  let li = '';

  for (let i = 2; i < pageCount + 1; i += 1) {
    li += `<li class='pagination__item'><a class="pagination__page"  href='' ${arreyId[i]}>${i}</a></li>`;
  }

  ul.insertAdjacentHTML('beforeend', li);
  controlColor();
}
