const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardsContainer = document.querySelector('.elements');

const elementTemplate = document.querySelector('#element');

const ESC_KEY = "Escape";

const popupEditButton = document.querySelector('.popup_type_edit-button');
const popupAddButton = document.querySelector('.popup_type_add-button');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupContainerImage = popupOpenImage.querySelector('.popup__container_image');
const popupContent = popupContainerImage.querySelector('.popup__content');
const popupImage = popupContent.querySelector('.popup__image');
const popupText = popupContent.querySelector('.popup__text');
const popupCloseEditButton = document.querySelector('.popup__close_type_edit-button');
const popupCloseAddButton = document.querySelector('.popup__close_type_add-button');
const popupCloseImage = document.querySelector('.popup__close_type_image');
const popupFormProfileEdit = popupEditButton.querySelector('.popup__form_type_edit-button');
const popupFormAddCard = popupAddButton.querySelector('.popup__form_type_add-button');
const popupCardName = popupFormAddCard.querySelector('.popup__input_type_card-name');
const popupLink = popupFormAddCard.querySelector('.popup__input_type_link');
const popupName = popupFormProfileEdit.querySelector('.popup__input_type_name');
const popupJob = popupFormProfileEdit.querySelector('.popup__input_type_job');
const buttonSumbitAdd = document.querySelector('.popup__save_add');
const buttonSubmitEdit = document.querySelector('.popup__save_edit');
const overlayImage = document.querySelector('.popup__container_overlay-image');
const overlayAdd = document.querySelector('.popup__container_overlay-add');
const overlayEdit = document.querySelector('.popup__container_overlay-edit');
const popupFormAdd =  popupAddButton.querySelector('.popup__form');



function openPopup(popup) {
  popup.classList.add('popup_is-active');
  document.addEventListener("keyup", documentKeyup)
}

function closePopup(popup) {
  popup.classList.remove('popup_is-active');
  document.removeEventListener("keyup", documentKeyup);
}

function documentKeyup(event) {
  if (event.key === ESC_KEY) {
    const popupOpened = document.querySelector('.popup_is-active');
    closePopup(popupOpened);
  }
}

profileEditButton.addEventListener('click', function() {
  
})

profileEditButton.addEventListener('click', function() {
  openPopup(popupEditButton)
})

profileAddButton.addEventListener('click', function() {
  openPopup(popupAddButton)
})

popupCloseEditButton.addEventListener('click', function() {
  closePopup(popupEditButton)
})

popupCloseAddButton.addEventListener('click', function() {
  closePopup(popupAddButton)
})

popupCloseImage.addEventListener('click', function() {
  closePopup(popupOpenImage)
})

function enterDataIntoFormSubmit() {
  popupName.value = profileName.textContent;
  popupJob.value = profileSubtitle.textContent;
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupJob.value;
  closePopup(popupEditButton)
}

function createCard(inputName, inputLink) {
  const elementTemplateContent = elementTemplate.content;
  const elementInfo = elementTemplateContent.querySelector('.element__info').cloneNode(true);
  const elementImage = elementInfo.querySelector('.element__image');

  elementInfo.querySelector('.element__title').textContent = inputName;
  elementImage.src = inputLink;
  elementImage.alt = inputName;

  elementInfo.querySelector('.element__button-trash').addEventListener('click', function() {
    elementInfo.remove();
  })

  elementInfo.querySelector('.element__button').addEventListener('click', function(event) {
    event.target.classList.toggle('element__button_active');
  })

  elementImage.addEventListener('click', function() {
    openPopup(popupOpenImage)
    popupImage.src = inputLink;
    popupImage.alt = inputName;
    popupText.textContent = inputName;
  })

  return elementInfo
}

function createItem(inputName, inputLink) {
  const cardItem = createCard(inputName, inputLink)
  cardsContainer.prepend(cardItem);
}

function addItem(evt) {
  evt.preventDefault();
  const inputName = popupCardName.value;
  const inputLink = popupLink.value;
  createItem(inputName, inputLink);
  closePopup(popupAddButton)
  popupFormAddCard.reset()
}

function arrayCards(array) {
  array.forEach(function(item) {
    createItem(item.name, item.link);
  })
}



arrayCards(initialCards)
enterDataIntoFormSubmit(profileEditButton)
//слушатели
profileEditButton.addEventListener('click',enterDataIntoFormSubmit)
popupFormProfileEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAddCard.addEventListener('submit', addItem);

