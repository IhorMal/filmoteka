import { localStorage } from "./localStorage";

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const QUEUE_SEARCH_TYPE = 'queue';
 function addMod(btn, mod) {
  btn.classList.remove(`remove-from-${mod}`);
  btn.classList.remove("button-active");
  btn.textContent = `add to ${mod}`;
  btn.classList.add(`add-to-${mod}`);
}
 function removeMod(btn, mod) {
  btn.classList.remove(`add-to-${mod}`);
  btn.textContent = `remove from ${mod}`;
  btn.classList.add(`remove-from-${mod}`);
  btn.classList.add("button-active");
 }

queueBtn.addEventListener('click', onQueueRenderCard);
backdrop.addEventListener('transitionend', onAddLisenerModalBtn);

function onAddLisenerModalBtn(event) {

    const addQueue = document.querySelector('[data-modal-queue]')
   
    if (backdrop.classList.contains('backdrop')) {
        addQueue.addEventListener('click', onClickBtnQueue)
    };
}
function onClickBtnQueue(e) {
    if (e.target.classList.contains('add-to-queue')) {
        const canAddCard = localStorage.addCard(STORAGE_QUEUE_KEY);
        if (!canAddCard) {
            Notify.failure(
                'Your library is full. Please remove a couple of movies to free some space.',
                settingsNotify,
            );
            return;
        } else if (main-pagination.searchType === QUEUE_SEARCH_TYPE) {
            onQueueRenderCard();
        }
        removeMod(e.target, 'queue');
    } else if (e.target.classList.contains('remove-from-queue')) {
        localStorage.delCard(STORAGE_QUEUE_KEY);
        addMod(e.target, 'queue');
        if (main-pagination.searchType === QUEUE_SEARCH_TYPE) {
            onQueueRenderCard();
        }
    }
}