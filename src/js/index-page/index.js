import { openModalFooter } from '../common/modal-footer';
import { openModal } from '../common/modal';
import { searchMovies } from './search';
import goTopBtn from '../common/goTopBtn';
import { renderPopularMovies } from './renderPopularMovies';
import btnWhiteBlack from '../common/btn-white-black';
import { controlColor, controlColorFilter } from '../common/controlColor';
import { filterRenderGenre, filterRenderYear } from './filterRender';
import { refs } from '../common/varriables';
import '../common/headers-fixed';
import {langCurrent, setIndexLang} from '../lang/changeLang'
import { filterRenderGenre, filterRenderYear } from './filterRender';
import * as extendedSearch from "./extendedSearch";

filterRenderGenre();
filterRenderYear();


refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);
refs.form.addEventListener('submit', searchMovies);
refs.enLangBTN.addEventListener('click', ()=>changeLang('en'));
refs.uaLangBTN.addEventListener('click', ()=>changeLang('ua'));

function changeLang (lang){
  setIndexLang(lang);
  filterRenderGenre();
  filterRenderYear();
  renderPopularMovies();
}

const currentLang = langCurrent();
renderPopularMovies();
setIndexLang(currentLang);
goTopBtn();
btnWhiteBlack();
controlColor();
controlColorFilter();
