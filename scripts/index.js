const profileEditButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modaCloseBtn = modalWindow.querySelector('.popup__close');

function toggleModalWindow() {
    modalWindow.classList.toggle('popup_is-active');
}

profileEditButton.addEventListener('click', toggleModalWindow);
modaCloseBtn.addEventListener('click', toggleModalWindow);

