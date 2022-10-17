import *as noImage from "../../images/main/no-picture.jpg";
import {controlColor} from "./controlColor";

export function renderItems(currentPageContent) {
  const mainContainer = document.querySelector('.filmoteka__container')
  const itemMarkup = currentPageContent.map(
    ({ id, title, year, genres, rating, imgPath }) => {

      // console.log(imgPath);
      if (genres) {
        let countOfComma = (genres.match(/\,/g) || []).length;
        while (countOfComma > 1) {
          genres = genres.slice(0, genres.lastIndexOf(',')) + '...';
          countOfComma = (genres.match(/\,/g) || []).length;
        }
      }
      let itemString = `
         <div class="filmoteka__item" data-id="${id}">
              <div class="filmoteka__item-wrapper">
                  <img class="filmoteka-img" src="${imgPath ? imgPath: noImage}" alt="${title}">
                  <div class="overlay-text">
                      <h2 class="subtitle">${title}</h2>
                      <p class="discription">`;
      if (genres) {
        itemString += `${genres} `;
        if (year) {
          itemString += `|`;
        }
      }
      if (year) {
        itemString += `<span class="filmoteka__year"> ${year}</span>`;
      }
      itemString += ` </p>
                      <div class="filmoteka__rating">${rating}</div>
                  </div>
              </div>
      </div>`;
      return itemString;
    }
  );
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML('beforeend', itemMarkup.join(''));
  controlColor();
}

