// Get the modal
const modal = document.getElementById('modal')
const modalContent = document.getElementById('modal-content')

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == modalContent) {
    modal.style.display = 'none'
  }
}

function changeFormToSignIn() {
  const modalTitleText = document.getElementById('modal--title')
  const modalSubtitle = document.getElementById('modal--subtitle')
  const modalCtaText = document.getElementById('modal--cta')
  const modalSubmit = document.getElementById('modal--submit')

  if (modalTitleText.textContent === 'تسجيل الاشتراك') {
    modalTitleText.textContent = 'تسجيل الدخول'
    modalSubtitle.textContent = 'زيارتك الأولى للموقع؟'
    modalCtaText.textContent = 'تسجيل الاشتراك'
    modalSubmit.value = 'تسجيل الدخول'
  } else {
    modalTitleText.textContent = 'تسجيل الاشتراك'
    modalSubtitle.textContent = 'هل أنت عضو بالفعل؟'
    modalCtaText.textContent = 'تسجيل الدخول'
    modalSubmit.value = 'تسجيل الاشتراك'
  }
}
