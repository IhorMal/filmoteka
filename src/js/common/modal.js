import { libraryRender } from '../library-page/libraryRender';
import { addMovieToLib, removeMovieFromLib } from '../localStorage/addRemove';
import localStrg from '../localStorage/localStrg';
import *as noImage from "../../images/main/no-picture.jpg";
import { langCurrent, translateModalBtns } from '../lang/changeLang';
import { controlColorModal } from './controlColor';

let closeButton = document.querySelector('.cross');
const modalBackdrop = document.querySelector('.backdrop');
const modalBox = document.querySelector('.modal-container');

let isQueued;
let isWatched;

export function openModal(event) {
  if (!event.target.classList.contains('filmoteka__item')) {
    return;
  }

  const movieId = +event.target.dataset.id;
  renderModal(movieId);

  modalBackdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  closeButton = document.querySelector('.cross');
  closeButton.addEventListener('click', modalClosing);
  modalBackdrop.addEventListener('click', modalClosinByBackdrop);
  window.addEventListener('keydown', modalClosinByEsc);
  controlColorModal();
}

function renderModal(movieID) {
  const currentPageContent = localStrg.load('currentPage');
  const movieToRender = currentPageContent.find(movie => movie.id === movieID);
  const {
    id,
    title,
    originalTitle,
    genres,
    popularity,
    overview,
    rating,
    voteCount,
    imgPath,
  } = movieToRender;

  let modalMarkup;

  if(langCurrent()=='ua'){
    modalMarkup = `
    <div class="modal-img-container">
    <img
      class="modal-img"
      src="${imgPath ? imgPath: noImage}"
      alt="${title}"
      width="370"
      height="470"
    />
  </div>
  <div class="film-info">
    <h2 class="film-name">${title}</h2>
    <table class="modal-table">
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Оцінка / Оцінок</p></td>
        <td>
          <p class="modal-table__value">
            <span class="modal-table__vote">${rating}</span> /
            <span class="modal-table__votes">${voteCount}</span>
          </p>
        </td>
      </tr>
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Популярність</p></td>
        <td><p class="modal-table__value">${popularity}</p></td>
      </tr>
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Оригінальна назва</p></td>
        <td><p class="modal-table__value">${originalTitle}</p></td>
      </tr>
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Жанр</p></td>
        <td><p class="modal-table__value">${genres || ''}</p></td>
      </tr>
    </table>
  
    <h3 class="film-about">Опис</h3>
    <p class="film-description">
      ${overview}
    </p>
    <div class="modal-btn-wrap">
      <button type="button" class="modal-btn js-watch" data-id="${id}">ДОДАТИ ДО ПЕРЕГЛЯНУТИХ</button>
      <button type="button" class="modal-btn js-queue" data-id="${id}">ДОДАТИ ДО ЧЕРГИ</button>
    </div>
  </div>`;
  }else{
    modalMarkup = `
    <div class="modal-img-container">
    <img
      class="modal-img"
      src="${imgPath ? imgPath: noImage}"
      alt="${title}"
      width="370"
      height="470"
    />
  </div>
  <div class="film-info">
    <h2 class="film-name">${title}</h2>
    <table class="modal-table">
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Vote / Votes</p></td>
        <td>
          <p class="modal-table__value">
            <span class="modal-table__vote">${rating}</span> /
            <span class="modal-table__votes">${voteCount}</span>
          </p>
        </td>
      </tr>
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Popularity</p></td>
        <td><p class="modal-table__value">${popularity}</p></td>
      </tr>
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Original Title</p></td>
        <td><p class="modal-table__value">${originalTitle}</p></td>
      </tr>
      <tr class="modal-table__row">
        <td><p class="modal-table__attribute">Genre</p></td>
        <td><p class="modal-table__value">${genres || ''}</p></td>
      </tr>
    </table>
  
    <h3 class="film-about">About</h3>
    <p class="film-description">
      ${overview}
    </p>
    <div class="modal-btn-wrap">
      <button type="button" class="modal-btn js-watch" data-id="${id}">ADD TO WATCHED</button>
      <button type="button" class="modal-btn js-queue" data-id="${id}">ADD TO QUEUE</button>
    </div>
  </div>`;
  }
 
  modalBox.insertAdjacentHTML('beforeend', modalMarkup);
  controlColorModal();
  checkUserLib(movieID);
  
}

function checkUserLib(movieID) {
  const watchBtn = document.querySelector('.js-watch');
  const queueBtn = document.querySelector('.js-queue');
  watchBtn.addEventListener('click', onClickWatchBtn);
  queueBtn.addEventListener('click', onClickQueueBtn);


  let watchedLib = localStrg.load('watched');
  let queuedLib = localStrg.load('queued');

  if (watchedLib) {
    isWatched = watchedLib.find(movie => movie.id == movieID) ? true : false;
  }
  if (queuedLib) {
    isQueued = queuedLib.find(movie => movie.id == movieID) ? true : false;
  }
  if (isWatched) {
    watchBtn.classList.add('watched');
    watchBtn.innerText = 'WATCHED';
  }

  if (isQueued) {
    queueBtn.classList.add('queued');
    queueBtn.innerText = 'QUEUED';
  }
  langCurrent()=='ua'&& translateModalBtns(isWatched,isQueued);
}

// Modal LibraryButtons functions
function onClickWatchBtn(event) {
  const movieID = event.target.dataset.id;
  const watchBtn = document.querySelector('.js-watch');

  if (!watchBtn.classList.contains('watched')) {
    addMovieToLib(movieID, 'watched');
    watchBtn.classList.add('watched');
    watchBtn.innerText = 'WATCHED';
    updateLibraryPageContent();
    langCurrent()=='ua'&& translateModalBtns(true,isQueued);
    isWatched = true;
    return;
  }

  watchBtn.classList.remove('watched');
  watchBtn.innerText = 'ADD TO WATCHED';
  removeMovieFromLib(movieID, 'watched');
  updateLibraryPageContent();
  isWatched = false;
  langCurrent()=='ua'&& translateModalBtns(false,isQueued);
}

function onClickQueueBtn(event) {
  const movieID = event.target.dataset.id;
  const queueBtn = document.querySelector('.js-queue');

  if (!queueBtn.classList.contains('queued')) {
    addMovieToLib(movieID, 'queued');
    queueBtn.classList.add('queued');
    queueBtn.innerText = 'QUEUED';
    langCurrent()=='ua'&& translateModalBtns(isWatched,true);
    updateLibraryPageContent();
    isQueued = true;
    return;
  }

  queueBtn.classList.remove('queued');
  queueBtn.innerText = 'ADD TO QUEUE';
  removeMovieFromLib(movieID, 'queued');
  isQueued = false;
  langCurrent()=='ua'&& translateModalBtns(isWatched,false);
  updateLibraryPageContent();
}

function updateLibraryPageContent() {
  if (window.location.href.indexOf('library') > -1) {
    const queuedBtn = document.querySelector('#btnQueued');
    const isQueuedSelected = queuedBtn.classList.contains('active-btn');
    const currentLibPage = isQueuedSelected ? 'queued' : 'watched';
    libraryRender(currentLibPage);
  }
}

// Modal closing functions
function modalClosing() {
  modalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  modalBackdrop.removeEventListener('click', modalClosinByBackdrop);
  closeButton.removeEventListener('click', modalClosing);
  window.removeEventListener('keydown', modalClosinByEsc);
  modalBox.innerHTML = '<button type="button" class="cross">+</button>';
}

function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}

function modalClosinByBackdrop(event) {
  if (event.target.classList.contains('backdrop')) {
    modalClosing();
  }
}
