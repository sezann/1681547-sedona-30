const popup = document.querySelector('.booking-form');
const button = document.querySelector('.sedona-hotels');


button.addEventListener('click',function(evt) {
  popup.classList.add('modal-close');
});

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    popup.classList.add('modal-close');
  }
});
