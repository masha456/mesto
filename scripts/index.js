const profilePopupOpened = 'popup_is-active';
const popupOpenImageWindow = 'popup_is-open-image';
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');

const elements = document.querySelector('.elements');

const popupEditButton = document.querySelector('.popup_type_edit-button');
const popupAddButton = document.querySelector('.popup_type_add-button');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupContainerImage = popupOpenImage.querySelector('.popup__container_image');
const popupForm = popupContainerImage.querySelector('.popup__content');
const popupImage = popupForm.querySelector('.popup__image');
const popupText = popupForm.querySelector('.popup__text');
const popupCloseEditButton = document.querySelector('.popup__close_type_edit-button');
const popupCloseAddButton = document.querySelector('.popup__close_type_add-button');
const popupCloseImage = document.querySelector('.popup__close_type_image');
const popupFormEditButton = popupEditButton.querySelector('.popup__form_type_edit-button');
const popupFormAddButton = popupAddButton.querySelector('.popup__form_type_add-button');
const popupCardName = popupFormAddButton.querySelector('.popup__input_type_card-name');
const popupLink = popupFormAddButton.querySelector('.popup__input_type_link');
const popupName = popupFormEditButton.querySelector('.popup__input_type_name');
const popupJob = popupFormEditButton.querySelector('.popup__input_type_job');



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//открытие
function openPopup(pop) {
  pop.classList.add(profilePopupOpened)
}

profileEditButton.addEventListener('click', function() {
  popupName.value = profileName.textContent;
  popupJob.value = profileSubtitle.textContent;
  openPopup(popupEditButton)
})

profileAddButton.addEventListener('click', function() {
  openPopup(popupAddButton)
})


//закрытие
function closePopup(pop) {
  pop.classList.remove(profilePopupOpened)
}

popupCloseEditButton.addEventListener('click', function() {
  closePopup(popupEditButton)
})

popupCloseAddButton.addEventListener('click', function() {
  closePopup(popupAddButton)
})

popupCloseImage.addEventListener('click', function() {
  popupOpenImage.classList.remove(profilePopupOpened)
  popupOpenImage.classList.remove(popupOpenImageWindow)
})

function submitForm(e) {
  e.preventDefault();
  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupJob.value;
  closePopup(popupEditButton)
}

popupFormEditButton.addEventListener('submit', submitForm);

function createCard(inputName, inputLink) {
  const elementTemplate = document.querySelector('#element').content;
  const elementInfo = elementTemplate.querySelector('.element__info').cloneNode(true);
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
    popupOpenImage.classList.add(profilePopupOpened)
    popupOpenImage.classList.add(popupOpenImageWindow)
    popupImage.src = inputLink;
    popupImage.alt = inputName;
    popupText.textContent = inputName;
  })

  return elementInfo
}

function createItem(inputName, inputLink) {
  const cardItem = createCard(inputName, inputLink)
  elements.prepend(cardItem);
}

function addItem(evt) {
  evt.preventDefault();
  const inputName = popupCardName.value;
  const inputLink = popupLink.value;
  createItem(inputName, inputLink);
  closePopup(popupAddButton)
  popupFormAddButton.reset()
}

initialCards.forEach(function(item) {
  createItem(item.name, item.link);
})

popupFormAddButton.addEventListener('submit', addItem);