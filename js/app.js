const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      // Настройки для мобильных устройств
      320: {
          slidesPerView: 2,
          spaceBetween: 10
      },
      // Настройки для планшетов
      768: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      // Настройки для больших экранов
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      // Настройки для очень больших экранов
      1440: {
          slidesPerView: 4,
          spaceBetween: 40
      }
  }
});

$(document).ready(function() {

  $('.faq__question').on('click', function() {

      var answer = $(this).next();
      $('.faq__answer').not(answer).slideUp();
      answer.slideDown(1300);
       $('.faq__question').toggleClass('.active');
  });

});



document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
  
    let nameError = document.getElementById("nameError");
    let phoneError = document.getElementById("phoneError");
    let popup = document.getElementById("popup");
    let form = document.getElementById("myForm");
    let timeOut;

  
    let valid = true;
  
    if (!name.value) {
      name.classList.add("invalid");
      name.setAttribute("aria-invalid", "true");
      nameError.innerHTML = "Обязательное поле";
      nameError.style.display = "block";
      successMessage.style.display = "none";
      valid = false;
    } else {
      name.classList.remove("invalid");
      name.removeAttribute("aria-invalid");
      nameError.style.display = "none";
    }

    if (!phone.value) {
        phone.classList.add("invalid");
        phone.setAttribute("aria-invalid", "true");
        phoneError.innerHTML = "Обязательное поле";
        phoneError.style.display = "block";
        successMessage.style.display = "none";
        valid = false;
      } else {
        phone.classList.remove("invalid");
        phone.removeAttribute("aria-invalid");
        phoneError.style.display = "none";
      }
  
    if (valid) {
      // successMessage.setAttribute("role", "status");
      // successMessage.innerHTML = "Регистрационная форма успешно отправлена!";
      popup.style.display = "flex";
      timeOut = setTimeout(popupClose, 3000);
      form.reset();
    }
  });

  function popupClose() {
    popup.style.display = "none";
  }

let inp = document.querySelector('#phone');

inp.addEventListener('focus', _ => {

  if(!/^\+\d*$/.test(inp.value))

    inp.value = '+998';
});
inp.addEventListener('keypress', e => {

  if(!/\d/.test(e.key))
    e.preventDefault();
});

// Получаем элементы
const popup = document.getElementById("popup-content");
const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");

// Открыть попап
openPopupBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Закрыть попап по кнопке закрытия
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Закрыть попап по клику вне окна попапа
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});