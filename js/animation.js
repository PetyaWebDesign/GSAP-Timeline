const navLinks = document.querySelectorAll('nav a');
const imgsNav = document.querySelectorAll('nav img');
const title = document.querySelector('h1');
const verticalLine = document.querySelectorAll('.middle-line');
const treeImg = document.querySelectorAll('.home-content img');
const button = document.querySelector('.home-content button');

window.addEventListener('load', revealAnimation);

function revealAnimation() {
    const tlfade = gsap.timeline();

    tlfade
        .from(title, { autoAlpha: 0, y: -50, delay: 0.2 })
        .to(verticalLine, { height: 150 }, '-=0.2')
        .from(treeImg, { autoAlpha: 0, y: -50 }, '-=0.2')
        .from(button, { autoAlpha: 0, y: -50 }, '-=0.2')
        .from(navLinks, { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 }, '-=0.2')
        .from(imgsNav, { autoAlpha: 0, y: -50 })
}