const popup = document.querySelector('.modal');
const buttonSwitchPopup = document.querySelector('.sedona-hotels');


buttonSwitchPopup.addEventListener('click',function() {
  popup.classList.toggle('modal-close');
  popup.classList.toggle('popup--open');

});


