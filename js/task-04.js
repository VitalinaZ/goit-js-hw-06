const button = document.querySelector('.js-click');
button.addEventListener('click', onClick);

function onClick(evt) {
    console.dir(evt.currentTarget);    

}