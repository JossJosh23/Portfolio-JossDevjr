const nav = document.querySelector('.nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0)
})

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})


   const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    },0);
    setTimeout(() => {
        text.textContent = "Blogger";
    },4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    },8000); //1S = 1000 milesimas
}
textLoad();
setInterval(textLoad, 12000); 