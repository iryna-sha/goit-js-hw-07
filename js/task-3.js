const newInput = document.querySelector('input#name-input');
const newOutput = document.querySelector('span#name-output');

newInput.addEventListener('input', () => {
    const inputText = newInput.value.trim();

    if (inputText === '') {
        newOutput.textContent = 'Anonymous';
    } else { 
newOutput.textContent = inputText;
}
});






