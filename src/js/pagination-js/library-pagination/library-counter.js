import { pageCount } from '../../library-page/libraryRender';
import { PAGE_LIBR } from './library-pag';
import { pagMarkupLib } from './library-markup';
import { markupLastPagLib } from './library-markup';
import { markupStartPagLib } from './library-markup';
import { markupPagLib } from './library-markup';
import { isNone } from './library-plugin';
import {controlColor} from '../../common/controlColor';

const divLib = document.querySelector('#pagination');

////////////////////////////// СЧЕТЧИК ПАГИНАЦИИ ////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// ОТРИСОВКА ПАГИНАЦИИ  ПО СЫЛКЕ
export function renderMarkupOnLibClickLink(e) {
  const firstPageLib = document.querySelector('#firstPage');
  const lastPageLib = document.querySelector('#lastPag');

  const pages = {
    peg2: PAGE_LIBR,
    peg3: PAGE_LIBR,
    peg4: PAGE_LIBR,
    peg5: PAGE_LIBR,
    peg6: PAGE_LIBR,
  };

  // Увиличение счетчика
  if (Number(lastPageLib.textContent) === PAGE_LIBR) {
    incrimentLib(pages);
  }

  // Последняя страница
  if (PAGE_LIBR === pageCount || PAGE_LIBR >= pageCount - 5) {
    lastPagesLib(pages);
  }

  // Уменьшение счетчика
  if (Number(firstPageLib.textContent) === PAGE_LIBR) {
    dicremrntLib(pages);
  }

  // Отрисовка начальных страниц от 1-6
  if (PAGE_LIBR === 1 || PAGE_LIBR <= 5) {
    startPageLib(e);
  }
}

//////////////////// ОТРИСОВКА ПАГИНАЦИИ  ПО КНОПКЕ

export function renderPagONLibClickBtn(e) {
  const firstPageLib = document.querySelector('#firstPage');
  const lastPageLib = document.querySelector('#lastPag');

  const pages = {
    peg2: PAGE_LIBR,
    peg3: PAGE_LIBR,
    peg4: PAGE_LIBR,
    peg5: PAGE_LIBR,
    peg6: PAGE_LIBR,
  };

  // // Последняя страница
  if (PAGE_LIBR >= pageCount - 5) {
    lastPagesLib(pages);
  }

  // увиличеник счетчика
  if (PAGE_LIBR > Number(lastPageLib.textContent)) {
    incrimentLib(pages);
  }

  // Отрисовка начальных страниц от 1-6
  if (PAGE_LIBR <= 2) {
    startPageLib();
  }

  // // Уменьшение счетчика
  if (PAGE_LIBR < Number(firstPageLib.textContent)) {
    dicremrntLib(pages);
  }
}

//////////////////////////////// ОТРИСОВКА ПОСЛЕДНЕЙ СТРАНИЦИ
function lastPagesLib(pages) {
  if (PAGE_LIBR > pageCount) {
    return;
  }
  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  divLib.innerHTML = '';

  peg6 = pageCount - 1;
  peg5 = pageCount - 2;
  peg4 = pageCount - 3;
  peg3 = pageCount - 4;
  peg2 = pageCount - 5;

  divLib.innerHTML = markupLastPagLib(peg2, peg3, peg4, peg5, peg6);
  controlColor();
}

//////////////////////////////////// УМЕНЬШЕНИЕ СЧЕТЧИКА
function dicremrntLib(pages) {
  if (PAGE_LIBR <= 2) {
    return;
  }

  divLib.innerHTML = '';

  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  peg5 -= 1;
  peg4 -= 2;
  peg3 -= 3;
  peg2 -= 4;

  divLib.innerHTML = pagMarkupLib(peg2, peg3, peg4, peg5, peg6);
  controlColor();
}

////////////////////////////////// // УВИЛИЧЕНИЕ СЧЕТЧИКА

function incrimentLib(pages) {
  if (PAGE_LIBR >= pageCount - 5) {
    return;
  }

  divLib.innerHTML = '';

  let { peg2, peg3, peg4, peg5, peg6 } = pages;

  peg3 += 1;
  peg4 += 2;
  peg5 += 3;
  peg6 += 4;

  divLib.innerHTML = pagMarkupLib(peg2, peg3, peg4, peg5, peg6);
  controlColor();
}

// //////////////////// РАЗМЕТКА ПАГИНАЦИИ ПРИ ПЕРВОМ ЗАПУСКЕ СТРАНИЦЫ (НАЧАЛЬНАЯ СТРАНИЦА)

export function startPageLib() {
  // if (pageCount < 7) {
  //   console.log('до ретурн');
  //   return;
  // }

  divLib.innerHTML = '';

  divLib.innerHTML = markupStartPagLib();

  controlColor();
}

// ЕСЛИ МАКСИМАЛЬНОЕ КАЛИЧЕСТВО СТРАНИЦ МЕНЬШЕ 8 РАЗМЕТКА ДОЛЖНА БЫТЬ ДИНАМИЧЕСКОЙ

export function adaptivPageLib() {
  divLib.innerHTML = '';

  divLib.innerHTML = markupPagLib();
  const arrayIdLib = [
    ,
    ,
    `id="firstPage"`,
    `id ='thirdPage'`,
    `id ='fourthPage'`,
    `id ='fifthPage'`,
    `id="lastPag"`,
    `id="preLastPag"`,
  ];
  const ulLib = document.querySelector('.pagination__list');

  let liLib = '';

  for (let i = 2; i < pageCount + 1; i += 1) {
    liLib += `<li class='pagination__item'><a class="pagination__page"  href='' ${arrayIdLib[i]}>${i}</a></li>`;
  }

  ulLib.insertAdjacentHTML('beforeend', liLib);
  controlColor();
}
