const modalFooter = document.getElementById('myModal');
const btn = document.getElementById('footerBtn');
const span = document.getElementsByClassName('close')[0];

const scrollTop = document.querySelector('#scrollTop');

btn.onclick = function () {
  modalFooter.style.display = 'block';
  document.body.classList.add('is-blocked');
  scrollTop.classList.add('visually-hidden');
};
span.onclick = function () {
  modalFooter.style.display = 'none';
  document.body.classList.remove('is-blocked');
  scrollTop.classList.remove('visually-hidden');
};

window.onclick = function (event) {
  if (event.target == modalFooter) {
    modalFooter.style.display = 'none';
  }
};
