// MENU

const menuBtn = document.getElementById('menu-btn');
const menuDiv = document.getElementById('menu-div');


menuBtn.addEventListener('click', () => {
    if (menuDiv.classList.contains('hidden')) {
        menuDiv.classList.replace('hidden', 'flex');
        console.log('opening');
    } else {
        menuDiv.classList.replace('flex', 'hidden');
        console.log('closing');
    }
})

// TITLE

const ptBtn = document.getElementById('pt-btn');
const frBtn = document.getElementById('fr-btn');
const enBtn = document.getElementById('en-btn');

const enDiv = document.getElementById('en-div');
const ptDiv = document.getElementById('pt-div');
const frDiv = document.getElementById('fr-div');


const titleDivs = [enDiv, ptDiv, frDiv]

function switchLanguage(lang) {
    i = titleDivs.findIndex(element => element.classList.contains('block'))
    titleDivs[i].classList.replace('block', 'hidden')
    document.getElementById(`${lang}-div`).classList.replace('hidden', 'block')
}

ptBtn.addEventListener('click', () => {
    switchLanguage('pt');
})
frBtn.addEventListener('click', () => {
    switchLanguage('fr');
})
enBtn.addEventListener('click', () => {
    switchLanguage('en');
})