const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: X, offsetY: y } = e;
}

hero.addEventListener('mousemove', shadow);
