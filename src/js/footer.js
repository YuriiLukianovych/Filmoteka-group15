var modalFooter = document.getElementById('myModal');
var btn = document.getElementById('footerBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modalFooter.style.display = 'block';
  document.body.classList.add('is-blocked');
};
span.onclick = function () {
  modalFooter.style.display = 'none';
  document.body.classList.remove('is-blocked');
};

window.onclick = function (event) {
  if (event.target == modalFooter) {
    modalFooter.style.display = 'none';
  }
};
