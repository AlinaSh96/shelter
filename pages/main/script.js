

let pets = []; // 8
let fullPetsList = []; // 48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');


request.onload = () => {
pets = JSON.parse(request.response);
createPets()
const buttonItems = document.querySelectorAll('.pets-card')
console.log(buttonItems);
buttonItems.forEach((buttonItem) => buttonItem.addEventListener(`click`, (event) => {
  event.preventDefault();
 console.log('click')
    }
  ))

};

const createPets = () => {
  const elem = document.querySelector(".pets__cards");
  elem.innerHTML += createElements();

  
  const openModalButtons = document.querySelectorAll('[data-modal-target]')
  const popupImg = document.querySelector('.pets__popup__img img')
  const popupName = document.querySelector('.pets__popup__name')
  const popupType = document.querySelector('.pets__popup__type')
  const popupDescription = document.querySelector('.pets__popup__description')
  const age = document.getElementById('age')
  const inoculations = document.getElementById('inoculations')
  const diseases = document.getElementById('diseases')
  const parasites = document.getElementById('parasites')
  const breed = document.getElementById('parasites')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    const id = button.dataset.petsname;
    openModal(modal)
    //console.log(test)
    // console.log(id)
    // console.log(petsList.id.type)


  
     for(let i = 0; i< pets.length; i++) {
      // console.log(id)
      if (id === pets[i].name){
       popupName.textContent = pets[i].name;
       popupDescription.textContent = pets[i].description;
       popupImg.src = pets[i].img;
       popupType.textContent = `${pets[i].type} - ${pets[i].breed}`
       age.textContent = pets[i].age;
       inoculations.textContent = pets[i].inoculations;
       diseases.textContent = pets[i].diseases;
       parasites.textContent = pets[i].parasites;
      }
     }
  })
})
}

createElements = () => {
  let str = '';
  // for (let i = 0; i < pets.length; i++) {
    for (let i = 0; i < pets.length;  i++) {


       
    str += `        <div class="swiper-slide">
                  <div data-modal-target="#modal" class=" pets-card" data-petsName="${ pets[i].name}">
                   <img src="${ pets[i].img } "  class="pets-card__image">
                   <div class="pets-card__content">
                   <h4 class="pets-card__title">
                   ${pets[i].name}
                  </h4>
                  <button class="pets-card__button">
                  Learn more
                  </button>
                  </div>
                  </div>
                  </div>`;
}
// mySwiper.appendSlide(str);
  return str;
 
}

request.send();




var mySwiper = new Swiper('.swiper-container', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  //slidesPerView:3,
  //slidesPerGroup:3,
  
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    // when window width is >= 320px
   1279: {

    slidesPerView: 3,
    slidesPerGroup:3,
    spaceBetween: 40,
    // loop: true,
   },
    700: {
      slidesPerView: 2,
      slidesPerGroup:2,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup:1,
    },
    
  },
});

//; // добавляем изображения
  mySwiper.update (); // обновляем swiper, чтобы он повторил привязки
  reinitSwiper(mySwiper);
  function reinitSwiper (swiper) {
    setTimeout (function () {
     swiper.update ();
    }, 1);
  }

  // function add() {
  //   mySwiper.appendSlide([
  //     '<div class="swiper-slide">Slide 10"</div>',
  //     '<div class="swiper-slide">Slide 11"</div>'
  //  ]);
  // }


// mySwiper.on('reachEnd', function () {
//   console.log('slide changed');
  
//   mySwiper.appendSlide([
//     '<div class="swiper-slide">Slide 10"</div>',
//     '<div class="swiper-slide">Slide 11"</div>'

//  ]);
// })


// popup
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  const body = document.querySelector('body');
  body.classList.toggle('lock');
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  body.classList.remove('lock')
}
////////////////

