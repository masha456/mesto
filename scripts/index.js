const profilePopup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const openProfileButton = document.querySelector('.profile__edit-button');
const formPopup = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupName = formPopup.querySelector('.popup__input_name');
const popupJob = formPopup.querySelector('.popup__input_job');
const profilePopupOpened = 'popup_is-active';

function openPopup () {
    popupName.value = profileName.textContent;
    popupJob.value = profileSubtitle.textContent;
    profilePopup.classList.add(profilePopupOpened);
}
openProfileButton.addEventListener('click', openPopup);


function closePopup () {
    profilePopup.classList.remove(profilePopupOpened);
}
closePopupButton.addEventListener('click', closePopup);


function submitForm (e) {
    e.preventDefault();
    profileName.textContent = popupName.value;
    profileSubtitle.textContent = popupJob.value;
    closePopup();
}
formPopup.addEventListener('submit', submitForm);
