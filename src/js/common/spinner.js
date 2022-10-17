export default class Spinner {

    spinOn() {
        const preLoader = document.getElementById('spinner');
        if (preLoader.classList.contains('done')) {
            preLoader.classList.remove('done')
        }
    };

    spinOff() {
        setTimeout(function () {
            const preloader = document.getElementById('spinner');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done')
            }
        
        }, 500);

    };
}