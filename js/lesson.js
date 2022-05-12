'use strict';

{ 
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    let selectedcolor;

    colors.forEach(color => {
      if(color.checked === true){
        selectedcolor = color.value;
      }
    });

    const linode = document.createElement('li');
    linode.textContent = selectedcolor;
    document.querySelector('ul').appendChild(linode);
  });
}