'user strict';

{
  const menus = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menus.forEach(menu => {
    menu.addEventListener('click', e => {
      e.preventDefault;

      menus.forEach(i => {
        i.classList.remove('active');
      })

      menu.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      })

      document.getElementById(menu.dataset.id).classList.add('active');
    })
  })
}