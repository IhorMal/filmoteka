import { pageCount } from '../../library-page/libraryRender';

export function pagMarkupLib(peg2, peg3, peg4, peg5, peg6) {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button'>
   <
  </button>
</div>
<ul class="pagination__list">
 <li class='pagination__item'>
  <a class='pagination__page' id="preFirstPage" href=''>1</a>
 </li>
 <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>
  <li class='pagination__item'>
  <a class='pagination__page' id="firstPage" href=''>${peg2}</a>
 </li>
 <li class='pagination__item'>
  <a class='pagination__page' id ='thirdPage' href=''>${peg3}</a>
 </li>
 <li class='pagination__item'>
  <a class='pagination__page' id ='fourthPage' href=''>${peg4}</a>
 </li>
 <li class='pagination__item'>
  <a class='pagination__page' id ='fifthPage' href=''>${peg5}</a>
 </li>
 <li class='pagination__item' id="preLastItem">
  <a class='pagination__page' id="lastPag" href=''>${peg6}</a>
 </li>
  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>
 <li class='pagination__item' id="lastItem">
  <a class='pagination__page' id="preLastPag" href=''>${pageCount}</a>
 </li>
</ul>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
    >
  </button>
</div>`;
}

export function markupLastPagLib(peg2, peg3, peg4, peg5, peg6) {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button'>
   <
  </button>
</div>

<ul class="pagination__list">
<li class="pagination__item">
  <a class='pagination__page' id="preFirstPage" href=''>1</a>
</li>
  <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>
<li class="pagination__item">
  <a class='pagination__page' id="firstPage" href=''>${peg2}</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id ='thirdPage' href=''>${peg3}</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id ='fourthPage' href=''>${peg4}</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id ='fifthPage' href=''>${peg5}</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id="lastPag" href=''>${peg6}</a>
</li>
  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>
<li class="pagination__item">
  <a class='pagination__page  pagination__page--activ' id="preLastPag" href=''>${pageCount}</a>
</li>

</ul>

<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
    >
  </button>
</div>`;
}

export function markupStartPagLib() {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button' disabled>
  <
  </button>
</div>

<ul class="pagination__list">
<li class="pagination__item">
  <a class='pagination__page pagination__page--activ' id="preFirstPage" href=''>1</a>
</li>
<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>
<li class="pagination__item">
  <a class='pagination__page' id="firstPage" href=''>2</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id="thirdPage" href=''>3</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id="fourthPage" href=''>4</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id="fifthPage" href=''>5</a>
</li>
<li class="pagination__item">
  <a class='pagination__page' id="lastPag" href=''>6</a>
</li>
  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>
<li class="pagination__item">
  <a class='pagination__page' id="preLastPag" href=''>${pageCount}</a>
</li>

</ul>

<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
  >
  </button>

</div>`;
}

export function markupPagLib() {
  return `<div class='pagination-decrement'>
  <button class='btn-left btn' type='button' disabled>
  <
  </button>
</div>
  <ul class="pagination__list">
  <li class='pagination__item'>
  <a class="pagination__page pagination__page--activ " id="preFirstPage" href=''>1</a>
  </li>
  </ul>
<div class='pagination-increment'>
  <button class='btn-right btn' type='button'>
  >
  </button>

</div>`;
}
