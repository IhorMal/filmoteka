import localStrg from '../localStorage/localStrg';
import { renderItems } from '../common/renderItems';
const libraryBackground = document.querySelector('.background-wrapper');
import { startPageLib } from '../pagination-js/library-pagination/library-counter';
import { adaptivPageLib } from '../pagination-js/library-pagination/library-counter';
import { PAGE_LIBR } from '../pagination-js/library-pagination/library-pag';
import { langCurrent } from '../lang/changeLang';
import { controlColorLibraryRender } from '../common/controlColor';
import { isNone } from '../pagination-js/library-pagination/library-plugin';


const refs = {
  paginationLib: document.querySelector('#pagination'),
  none: document.querySelector('.thumb'),
};
export let pageCount;

export function libraryRender(userLibrary) {
  const mainContainer = document.querySelector('.filmoteka__container');
  let currentLib = localStrg.load(userLibrary);

  if (currentLib) {
    refs.none.classList.remove('is-none');
  } else if (!currentLib) {
    refs.none.classList.add('is-none');
  }

  if (!currentLib) {
    libraryBackground.classList.remove('no-display');
    if (langCurrent() == 'ua') {
      mainContainer.innerHTML =
        '<div><p2 class="empty_text">Схоже, ваша бібліотека порожня.</p2></div>';
      controlColorLibraryRender();
    } else {
      mainContainer.innerHTML =
        '<div><p2 class="empty_text">It seems that there is no films here!</p2></div>';
      controlColorLibraryRender();
    }
    
    return;
  }
  pageCount = getPageCount(currentLib);
  let arrayMove = counterRenderMove(currentLib, PAGE_LIBR);
  renderItems(arrayMove);
  localStrg.save('currentPage', arrayMove);
  libraryBackground.classList.add('no-display');
  refs.paginationLib.innerHTML = '';
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    startPageLib();
  }
}

function counterRenderMove(array, PAGE_LIBR) {
  const cards = 3;

  let refPoint;
  let сountdown;

  if (PAGE_LIBR === 1) {
    refPoint = 0;
    сountdown = cards;
  } else if (PAGE_LIBR === 2) {
    refPoint = cards;
    сountdown = cards * 2;
  } else {
    refPoint = cards * (PAGE_LIBR - 1);
    сountdown = cards * PAGE_LIBR;
  }

  let arr = [];

  if (array.length > cards) {
    for (let i = refPoint; i < сountdown; i += 1) {
      if (array[i] === undefined) {
        break;
      }
      arr.push(array[i]);
    }
  } else {
    arr = array;
  }

  return arr;
}

function getPageCount(arr) {
  return Math.ceil(arr.length / 3);
}
