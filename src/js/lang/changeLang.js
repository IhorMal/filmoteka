import { text } from './packageLang';

const refs = {
  enLangBTN: document.getElementById('e-lang-en'),
  uaLangBTN: document.getElementById('e-lang-ua'),
};

const inputPlaceholder = document.querySelector('.header_search-input');
const extInputPlaceholder = document.querySelector('.keyword-input');
const extInputLabel = document.querySelector('#keywords-label');
const extSearchBtnSbmt = document.querySelector('.js-filter-submit');
const extSearchBtnRst = document.querySelector('.js-filter-reset');

export function langCurrent() {
  if (localStorage.getItem('lang') === 'ua') {
    return 'ua';
  }
  return 'en';
}

export function setIndexLang(lang) {
  let par;
  if (!text.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);

  for (par in text[lang]) {
    let elem = document.querySelector(par);
    if (elem !== null) {
      elem.textContent = text[lang][par];
    }
  }
    if (lang === 'ua') {
      document.querySelector('html').setAttribute('lang', 'ua');
      inputPlaceholder.placeholder = 'Пошук Фільму';
      refs.enLangBTN.style.cssText = `color: #fff;`;
      refs.uaLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Ключове слово/фраза';
      extInputPlaceholder.placeholder = 'пошук...';
      extSearchBtnSbmt.innerHTML = 'шукати';
      extSearchBtnRst.innerHTML = 'скинути';

    } else {
      document.querySelector('html').setAttribute('lang', 'en');
      inputPlaceholder.placeholder = 'Movie search';
      refs.uaLangBTN.style.cssText = `color: #fff;`;
      refs.enLangBTN.style.cssText = `color: #ff6b01;`;

      extInputLabel.innerHTML = 'Keyword search:';
      extInputPlaceholder.placeholder = 'search...';
      extSearchBtnSbmt.innerHTML = 'search';
      extSearchBtnRst.innerHTML = 'reset';
    
  }
}

export function setLibraryLang(lang) {
  let par;
  if (!text.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);

  for (par in text[lang]) {
    let elem = document.querySelector(par);
    if (elem !== null) {
      elem.textContent = text[lang][par];
    }

    if (lang === 'ua') {
      document.querySelector('html').setAttribute('lang', 'ua');
      document.querySelector('#btnWatched').innerText = 'ПЕРЕГЛЯНУТІ';
      document.querySelector('#btnQueued').innerText = 'У ЧЕРЗІ';
      try {
        document.querySelector('.empty_text').textContent =
          'Схоже, ваша бібліотека порожня.';
      } catch {}
      refs.enLangBTN.style.cssText = `color: #fff;`;
      refs.uaLangBTN.style.cssText = `color: #ff6b01;`;
    } else {
      document.querySelector('html').setAttribute('lang', 'ua');
      document.querySelector('#btnWatched').innerText = 'WATCHED';
      document.querySelector('#btnQueued').innerText = 'QUEUED';
      try {
        document.querySelector('.empty_text').textContent =
          'It seems that there is no films here!';
      } catch {}
      refs.enLangBTN.style.cssText = `color: #ff6b01;`;
      refs.uaLangBTN.style.cssText = `color: #fff;`;
    }
  }
}
export function translateModalBtns(isWatched, isQueued) {
  const watchBtn = document.querySelector('.js-watch');
  const queueBtn = document.querySelector('.js-queue');

  watchBtn.innerText = isWatched ? 'ПЕРЕГЛЯНУТО' : 'ДОДАТИ ДО ПЕРЕГЛЯНУТИХ';
  queueBtn.innerText = isQueued ? 'У ЧЕРЗІ' : 'ДОДАТИ ДО ЧЕРГИ';
}
