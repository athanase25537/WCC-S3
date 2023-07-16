//scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// text typing animation
const text = document.querySelector('.sec-text');
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developpeur";
        let textBefore = getComputedStyle(text, '::before')
        textBefore.animation.steps = text.textContent.length;
    }, 0);

    setTimeout(() => {
        text.textContent = "Freelancer";
        let textBefore = getComputedStyle(text, '::before')
        textBefore.animation.steps = text.textContent.length;
    }, 4000);

    setTimeout(() => {
        text.textContent = "Designer";
        let textBefore = getComputedStyle(text, '::before')
        textBefore.animation.steps = text.textContent.length;
    }, 8000);

}

textLoad();
setInterval(textLoad, 12000);


if(window.innerWidth <= 630){
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('header').classList.remove('show');
}

//Menu burger
const menu = document.querySelector('.menu');
menu.classList.remove('show');
const header = document.querySelector('header');
menu.addEventListener('click', () => {
    header.classList.toggle('show');
    menu.classList.toggle('show');
})
