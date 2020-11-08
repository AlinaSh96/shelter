







let pets = []; // 8
let fullPetsList = []; // 48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
//request.onload = () => {console.log(request.response)};
fetch('./pets.json').then(res => res.json()).then(list => {
  pets = list;

  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();

  fullPetsList = sort863(fullPetsList);

  createPets(fullPetsList);
  const buttonItems = document.querySelectorAll('.pets-card')
// console.log(buttonItems);
// buttonItems.forEach((buttonItem) => buttonItem.addEventListener(`click`, (event) => {
//   event.preventDefault();
//  console.log('click')
//     }
//   ))

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// console.log(openModalButtons)
// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     console.log(44)
//     openModal(modal)
//   })
// })

  // document.querySelector("#currentPage").innerText = (currentPage+1).toString();

  for (let i = 0; i < (fullPetsList.length / 6); i++) {
    const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      stepList.forEach((item, ind) => {
        if ( item.name === stepList[j].name && (ind !== j) ) {
          document.querySelector("#pets").children[(i * 6) + j].style.border = '5px solid red';
        }
      })
    }
  }
})
// request.onload = () => {
//   pets = JSON.parse(request.response);


// }

const createPets = (petsList) => {
  const elem = document.querySelector("#pets");
  elem.innerHTML += createElements(petsList);
   console.log(petsList)




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


  
     for(let i = 0; i< petsList.length; i++) {
      // console.log(id)
      if (id === petsList[i].name){
       console.log(petsList[i].img)
       popupName.textContent = petsList[i].name;
       popupDescription.textContent = petsList[i].description;
       popupImg.src = petsList[i].img;
       popupType.textContent = `${petsList[i].type} - ${petsList[i].breed}`
       age.textContent = petsList[i].age;
       inoculations.textContent = petsList[i].inoculations;
       diseases.textContent = petsList[i].diseases;
       parasites.textContent = petsList[i].parasites;
      }
     }
  })
})
}

createElements = (petsList) => {
  
  // Проходим по массиву
  let str = '';
  for (let i = 0; i < petsList.length; i++) {
    // str += `<img src=" ${ petsList[i].img } ">`;


  //   str += `      <div class="swiper-slide pets__card">
  //   <img src="${ petsList[i].img }" class="pets-card__image">
  // </div>`

  str += `      <div class=" swiper-slide ">
  <div data-modal-target="#modal" class=" pets-card" data-petsName="${ petsList[i].name}">
  <img src="${ petsList[i].img }" class="pets-card__image">
  <div class="pets-card__content">
    <h4 class="pets-card__title">
    ${ petsList[i].name}
    </h4>
    <button   class="pets-card__button"  >
      Learn more
    </button>
    </div>
  </div>
</div>`




  }
  return str;
}


request.send();

const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;


  list = sort6recursively(list);

  return list;
}

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
}


// var btns = document.querySelectorAll(".pets-card")
// btns.forEach(function(btn) {
//   // Вешаем событие клик
//   btns.addEventListener('click', function(e) {
//     console.log('Button clicked' + e.target.classList);
//   })
// })

// var mySwiper = new Swiper('.swiper-container', {
  
//   // Optional parameters
//   direction: 'horizontal',
//  // loop: true,
//   slidesPerView:3,
//   slidesPerGroup:3,
//   // spaceBetween: 40,
//   // If we need pagination

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

// // }
// });

//; // добавляем изображения
var swiper = new Swiper('.swiper-container', {
  // simulateTouch: false,
  // followFinger: false,
  // allowTouchMove: false,

  pagination: {
    el: '.number-btn',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>'         
  }
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
   1279: {

    slidesPerView: 4,
    slidesPerColumn: 2,
    slidesPerGroup:4,
    spaceBetween: 40,
   },
    700: {
      slidesPerView: 2,
      slidesPerColumn: 3,
      slidesPerGroup:2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 3,
      slidesPerGroup:1,
    },
    
  },
});

//; // добавляем изображения
//mySwiper.update (); // обновляем swiper, чтобы он повторил привязки
reinitSwiper(swiper);
function reinitSwiper (swiper) {
  setTimeout (function () {
   swiper.update ();
  }, 200);
}
const last = document.getElementById("last");
const first = document.getElementById("first");

// console.log(page.textContent)
// if (page.textContent == 1) {
//   last.style.color = 'red'
// }
console.log(swiper.activeIndex );


last.addEventListener('click',() => {
  swiper.slideTo(48)

 // console.log(swiper.realIndex);
  // if (swiper.activeIndex == 20){
  //   last.type = 'disabled'
  //   first.type = 'active'
  //   last.style.pointerEvents = 'none'
  //   first.style.pointerEvents = 'auto'
  // }
  // else {
  //   last.type = 'active'
  // }
  // let r = createPets();
})

// const page = document.querySelector("body > main > div > div > div > div.pets__pagination > div > span")
// if (page.textContent == 1) {
//   first.classList.add('disabled')
// }


swiper.on('transitionStart', function () {
  const page = document.querySelector("body > main > div > div > div > div.pets__pagination > div > span")
  console.log('slide changed');
  console.log(page.textContent);
if (page.textContent == 6) {
  last.type = 'disabled' 
  first.type = 'active'
  last.style.pointerEvents = 'none'
}
else if (page.textContent < 6) {
  last.type = 'active' 
  last.style.pointerEvents = 'auto'
}
 if (page.textContent == 1) {
  first.classList.add('disabled');
  last.type = 'active'
  //  first.style.pointerEvents = 'none'
  // first.style.pointer = 'none'
}
else if (page.textContent > 1) {
  first.type = 'active' 
  first.style.pointerEvents = 'visible';
  first.style.pointer = 'pointer'
  first.classList.remove('disabled')
}




// else last.type = 'active'
// last.style.pointerEvents = 'auto'
});

first.addEventListener('click',() => {
  swiper.slideTo(0)
  //console.log(swiper.realIndex);

    // first.type = 'disabled'
    // first.style.pointerEvents = 'none'
    // last.style.pointerEvents = 'auto'
    // last.type = 'active'
})












//popup

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
  const closeModal = document.querySelectorAll('[data-close-button]')
  body.classList.toggle('lock');
  modal.classList.add('active')
  overlay.classList.add('active')
  // this.overlay.addEventListener('mouseover', () => {
  //   this.closeModal.classList.add('active')
  // })
  
  // this.overlay.addEventListener('mouseout', () => {
  //   this.closeModal.classList.remove('active')
  // })
  


}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  body.classList.remove('lock')
}
////////////////
