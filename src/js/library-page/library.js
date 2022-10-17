import { openModalFooter } from '../common/modal-footer';
import { openModal } from '../common/modal';
import { libraryRender } from './libraryRender';
import goTopBtn from '../common/goTopBtn';
import { isTouuchDevice } from '../library-page/libraryBackground';
import Spinner from '../common/spinner';
import btnWhiteBlack from '../common/btn-white-black';
import { controlColor, controlColorLibraryRender } from '../common/controlColor';
import '../common/headers-fixed'

import { langCurrent, setLibraryLang } from '../lang/changeLang';

const spin = new Spinner();
spin.spinOn();

export const refs = {
  btnWatched: document.querySelector('#btnWatched'),
  btnQueued: document.querySelector('#btnQueued'),
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open'),
  mainContainer: document.querySelector('.filmoteka__container'),
  enLangBTN: document.getElementById('e-lang-en'),
  uaLangBTN: document.getElementById('e-lang-ua'),
};

refs.enLangBTN.addEventListener('click', () => setLibraryLang('en'));
refs.uaLangBTN.addEventListener('click', () => setLibraryLang('ua'));

const currentLang = langCurrent();
libraryRender('watched');
setLibraryLang(currentLang);

/* asigning events listiners to buttons: watched and queued */
refs.btnQueued.addEventListener('click', clickOnBtnQueuedHandler);
refs.btnWatched.addEventListener('click', clickOnBtnWatchedHandler);
refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);

/* defining functions for event listiners*/

function clickOnBtnQueuedHandler() {
  refs.btnWatched.classList.remove('active-btn');
  refs.btnQueued.classList.add('active-btn');
  libraryRender('queued');
}

function clickOnBtnWatchedHandler() {
  refs.btnQueued.classList.remove('active-btn');
  refs.btnWatched.classList.add('active-btn');
  libraryRender('watched');
}

goTopBtn();
spin.spinOff();
btnWhiteBlack();
controlColor();
// controlColorLibraryRender();
