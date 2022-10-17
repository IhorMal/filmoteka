import { renderMarkupOnLibClickLink } from './library-counter';
import { renderPagONLibClickBtn } from './library-counter';
import { adaptivPageLib } from './library-counter';

import { libraryRender } from '../../library-page/libraryRender';
import { loadlibrary } from '../../localStorage/localStrg';

import { pageCount } from '../../library-page/libraryRender';

import { ellipsisLib } from './library-plugin';
import { curentPageLib } from './library-plugin';
import { disaibledBtnLib } from './library-plugin';
import {controlColor} from '../../common/controlColor';

const refs = {
  paginationLib: document.querySelector('#pagination'),
};

setListenerLib(refs.paginationLib, 'click', onlibraryLink);
setListenerLib(refs.paginationLib, 'click', onlibraryBtn);
function setListenerLib(element, tayp, handler) {
  if (element) {
    element.addEventListener(tayp, handler);
  }
}

export let PAGE_LIBR = 1;

export function onlibraryLink(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }

  PAGE_LIBR = Number(e.target.textContent);

  if (loadlibrary === 'watched') {
    libraryRender('watched');
  } else if (loadlibrary === 'queued') {
    libraryRender('queued');
  }

  // СЧЕТЧИК
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    renderMarkupOnLibClickLink();
    ellipsisLib();
  }
  controlColor();
  curentPageLib();
  disaibledBtnLib();
}

export function onlibraryBtn(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const ref = {
    leftBtn: document.querySelector('.btn-left'),
    rightBtn: document.querySelector('.btn-right'),
  };
  if (e.target === ref.rightBtn) {
    PAGE_LIBR += 1;
  }
  if (e.target === ref.leftBtn) {
    PAGE_LIBR -= 1;
  }

  if (loadlibrary === 'watched') {
    libraryRender('watched');
  } else if (loadlibrary === 'queued') {
    libraryRender('queued');
  }

  // СЧЕТЧИК
  if (pageCount > 1 && pageCount < 8) {
    adaptivPageLib();
  } else if (pageCount !== 1) {
    renderPagONLibClickBtn();
    ellipsisLib();
  }
  controlColor();
  curentPageLib();
  disaibledBtnLib();
}
