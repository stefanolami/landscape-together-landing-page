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