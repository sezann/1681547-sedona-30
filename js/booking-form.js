const popup = document.querySelector('.modal');
const button = document.querySelector('.sedona-hotels');


button.addEventListener('click',function(evt) {
  popup.classList.toggle('modal-close');
});

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    popup.classList.add('modal-close');
  }
});
