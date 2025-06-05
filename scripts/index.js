const treats = document.querySelectorAll('.treat');
let current = 2;

function setActive(index) {
    treats.forEach(t => t.classList.remove('active'));
    treats[index].classList.add('active');
}

function autoSlide() {
    current = (current + 1) % treats.length;
    setActive(current);
}

let interval = setInterval(autoSlide, 3000);

treats.forEach((treat, i) => {
    treat.addEventListener('click', () => {
        clearInterval(interval);
        current = i;
        setActive(current);
        interval = setInterval(autoSlide, 3000);
    });
});

setActive(current);

