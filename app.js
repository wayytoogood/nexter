const sideToggle = document.querySelector('.sidebar__toggle-container');
const sideList = document.querySelector('.sidebar__list');
const sideBar = document.querySelector('.sidebar');

const sideToggleBefore = window.getComputedStyle(
  document.querySelector('.sidebar__toggle-container'),
  ':before'
);

const sideToggleAfter = document.querySelector('.sidebar__toggle::after');

sideToggle.addEventListener('click', () => {
  const fontSize = parseFloat(
    getComputedStyle(document.querySelector('html'))['font-size']
  );

  const screenSize = window.innerWidth / fontSize;

  sideList.classList.toggle('sidebar__list-open');
  console.log(screenSize, fontSize);
  if (screenSize >= 102.4) {
    //meadia query'ile değiştirilen font size'lar geçerli olmuyor, ilkte ne yazılıysa o alınıyor direk.
    sideBar.classList.toggle('sidebar-grow');
  }
});
