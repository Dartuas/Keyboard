let outputElement = document.querySelector('.output');
const body = document.querySelector('body');
let curentKeyJiggle;
let succesS = 0;
let unsuccesS = 0;
let attempts = 0;

const keyButtons = [...document.querySelectorAll('.key')];
// console.log(keyButtons);
const keys = keyButtons.map(keyButton => keyButton.dataset.key);
// console.log(keys);

const keyToButtonsMap = keyButtons.reduce((acc, keyButton) => {
    const curentKey = keyButton.dataset.key;
    acc[curentKey] = keyButton;
    return acc;
}, {});
console.log(keyToButtonsMap);

body.addEventListener('keyup', (event) => {
    console.log(event);
    const typedKey = event.key;
    checkKey(typedKey);
});
body.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        const clickedKey = event.target.dataset.key;
        checkKey(clickedKey);
    }
});


const checkKey = (inputKey) => {
    console.log(inputKey);
    if (inputKey.toUpperCase() === curentKeyJiggle) {
        console.log(inputKey.toUpperCase());
        setRandomKeys();
        succesS++;
    }
    else {
        unsuccesS++;
    }
    attempts++;
    if (attempts === 10) {
        outputElement.innerHTML = `Правильні: ${succesS} Неправильні: ${unsuccesS}`;
    }

}
const setRandomKeys = () => {
    if (curentKeyJiggle) {
        keyToButtonsMap[curentKeyJiggle].classList.remove('jiggle');
    }


    const randomIndex = Math.floor(Math.random() * keys.length);
    // console.log(randomIndex);
    curentKeyJiggle = keys[randomIndex];
    keyToButtonsMap[curentKeyJiggle].classList.add('jiggle');
};

setRandomKeys();