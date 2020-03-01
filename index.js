const $imgBox = document.querySelector('#imgBX');
const $body = document.body;

const options = { 
    /* root: document.querySelector('#container'), */
    rootMargin: '0px',
    threshold: 1
}

function  callback( entries, observer) {
    console.log('se llama al observer');
    /* $body.style.background = "red"; */
    /* $body.style.background = "linear-gradient(to right, #281c3c, #1c253c, #1f3e5a, #145051);"; */
}

const observer = new IntersectionObserver(callback, options);
observer.observe($imgBox);