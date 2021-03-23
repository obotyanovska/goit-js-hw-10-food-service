import menuItemTpl from './templates/menu-item.hbs';
import menu from './js/menu.json';
import './styles.css';

const menuListRef = document.querySelector('ul.js-menu');
const checkBoxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createMenuList (array) {
  const menuList = array.map(menuItemTpl).join('');
  menuListRef.insertAdjacentHTML('beforeend', menuList);
}
createMenuList (menu);


checkBoxRef.addEventListener('change', onCheckBoxChange);

colorizeTheme ();

function onCheckBoxChange (e) {
    const bodyDarkTheme = document.querySelector('.dark-theme');
    
    if (!bodyDarkTheme) {
      
      localStorage.setItem('theme', Theme.DARK);
      colorizeTheme ()
      
      bodyRef.classList.remove(Theme.LIGHT);
    }  else {
      localStorage.setItem('theme', Theme.LIGHT);
      colorizeTheme ()
      bodyRef.classList.remove(Theme.DARK);
    }
    
}

function colorizeTheme () {
  const colorTheme = localStorage.getItem('theme');
  
  if(colorTheme) {
    bodyRef.classList.add(colorTheme);
  }

  const bodyDarkTheme = document.querySelector('.dark-theme');
  
  if(bodyDarkTheme) {
    checkBoxRef.setAttribute('checked', true);
  }
}
