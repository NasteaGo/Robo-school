let modal=document.querySelector('.modal');
let openPopupButton= document.querySelectorAll('.button-trainer');
let closeButton = document.querySelector('.modal-exit');
openPopupButton.forEach((openButton)=> {
    openButton.addEventListener('click', function () {
        modal.classList.add('modal-show');
    })
});

closeButton.addEventListener('click', function(){
    modal.classList.remove('modal-show');
})
document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        modal.classList.remove('modal--show');
    }
});
