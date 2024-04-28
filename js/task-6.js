function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


    const input = document.querySelector('#controls input');
    const createBtn = document.querySelector('button[data-create]');
    const destroyBtn = document.querySelector('button[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createBtn.addEventListener('click', createBoxes);
    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes() {
      const amount = Number(input.value);
      if (amount < 1 || amount > 100) {
        return;
      }
      
     const fragment = document.createDocumentFragment();


      let size = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
       fragment.appendChild(box);
        size += 10;
      }

      boxesContainer.innerHTML = '';
      boxesContainer.appendChild(fragment);
      
      input.value = '';
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }
 



 