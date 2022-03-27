const profileEditButton = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const modaCloseBtn = modalWindow.querySelector('.popup__close');

function openModalWindow() {
    modalWindow.classList.add('popup_is-active');
}

profileEditButton.addEventListener('click', openModalWindow);