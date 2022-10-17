export function controlColor() {
    const paginColor = document.querySelectorAll('.pagination__page');
    const paginEllips = document.querySelectorAll('.pagination__ellipsis');
    const gallerySubtittle = document.querySelectorAll('.subtitle');
    const modaTvalue = document.querySelectorAll('.modal-table__value');
    const modalTattributes = document.querySelectorAll('.modal-table__attribute');
    // const searchMovies = document.querySelector('.filter');
    // const modalBtn = document.querySelectorAll('.modal-btn');
    
    try {
        if (localStorage.getItem('section') === 'section-black') {
            document.querySelector('footer').style.backgroundColor = '#303846';
            document.querySelector('.footer__text').style.color = '#f7f7f7';
            document.querySelector('.modal-footer-open').style.color = '#f7f7f7';
            document.querySelector('.modal-container').style.backgroundColor = '#3e444c';
            // document.querySelector('.film-name').style.color = '#ffffff';
            // document.querySelector('.film-about').style.color = '#ffffff';
            // document.querySelector('.film-description').style.color = '#ffffff';
            // document.querySelector('.modal-table__votes').style.background = '#878787';
            // searchMovies.classList.add('black-theme');

            // .film-name
            // .modal-table__value (all)
            // .modal-table__attribute color=#d4d4d4 (all)
            // .film-about
            // .film-description
            // .modal-btn (all) background=#00000052
            // document.querySelector('.empty_text').style.color = '#ffffff';
            modaTvalue.forEach(mtv => mtv.style.color = '#ffffff');
            modalTattributes.forEach(mta => mta.style.color = '#d4d4d4');
            // modalBtn.forEach(mb => mb.style.background = '#00000052');
            paginColor.forEach(p => p.style.color = '#ffffff');
            paginEllips.forEach(pEl => pEl.style.color = '#ffffff');
            gallerySubtittle.forEach(g => g.style.color = '#ffffff');
            
        }
        else {
            document.querySelector('footer').style.backgroundColor = '#f7f7f7';
            document.querySelector('.footer__text').style.color = '#545454';
            document.querySelector('.modal-footer-open').style.color = '#545454';
            document.querySelector('.modal-container').style.backgroundColor = '#ffffff';
            // document.querySelector('.film-name').style.color = '#000000';
            // document.querySelector('.film-about').style.color = '#000000';
            // document.querySelector('.film-description').style.color = '#000000';
            // document.querySelector('.modal-table__votes').style.background = '#f7f7f7';
            // searchMovies.classList.remove('black-theme');

            // document.querySelector('.empty_text').style.color = '#000000';
            modaTvalue.forEach(mtv => mtv.style.color = '#000000');
            modalTattributes.forEach(mta => mta.style.color = '#8c8c8c');
            // modalBtn.forEach(mb => mb.style.background = '#ffffff');
            paginColor.forEach(p => p.style.color = '#000000');
            paginEllips.forEach(pEl => pEl.style.color = '#000000');
            gallerySubtittle.forEach(g => g.style.color = '#000000');
            
        }
    } catch (err) { console.log(err) }
}


export function controlColorFilter() { 
    const searchMovies = document.querySelector('.filter');

    if (localStorage.getItem('section') === 'section-black') {
        searchMovies.classList.add('black-theme');
        document.getElementById('keywords-label').style.color = '#ffffff';
    } else {
        searchMovies.classList.remove('black-theme');
        document.getElementById('keywords-label').style.color = '#000000';
    }
}

export function controlColorModal() { 
    
    if (localStorage.getItem('section') === 'section-black') {
        document.querySelector('.film-name').style.color = '#ffffff';
        document.querySelector('.film-about').style.color = '#ffffff';
        document.querySelector('.film-description').style.color = '#ffffff';
        document.querySelector('.modal-table__votes').style.background = '#878787';
        document.querySelector('.modal-table').style.color = '#ffffff';
    } else {
        document.querySelector('.film-name').style.color = '#000000';
        document.querySelector('.film-about').style.color = '#000000';
        document.querySelector('.film-description').style.color = '#000000';
        document.querySelector('.modal-table__votes').style.background = '#f7f7f7';
        document.querySelector('.modal-table').style.color = '#000000';
    }
}

export function controlColorLibraryRender() {
    
    if (localStorage.getItem('section') === 'section-black') {
        document.querySelector('.empty_text').style.color = '#ffffff';
    } else {
        document.querySelector('.empty_text').style.color = '#000000';
    }
}