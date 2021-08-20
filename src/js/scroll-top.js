window.onload = () => {
  const Y_COORD = 700; // количество  пикселей, пролистанных по вертикали, когда нужно отображать кнопку scrollToTop
  const scrollBtn = document.querySelector('.isShowBtn');
  window.onscroll = () => {
    if (window.scrollY > Y_COORD) {
      scrollBtn.classList.remove('isShowBtn_show');
    } else if (window.scrollY < Y_COORD) {
      scrollBtn.classList.add('isShowBtn_show');
    }
  };

  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};
