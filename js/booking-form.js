const popup = document.querySelector('.booking-form');
const buttonSwitchPopup = document.querySelector('.sedona-hotels');


buttonSwitchPopup.addEventListener('click',function() {
  popup.classList.toggle('modal-close');
});


