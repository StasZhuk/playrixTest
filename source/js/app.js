const burger = document.querySelector('.btn-burger');
const nav = document.querySelector('.nav-header');

burger.addEventListener('click', function (e) {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        burger.classList.remove('no-animation');
        nav.classList.remove('active');        
    }
    else {
        burger.classList.add('active');
        burger.classList.remove('no-animation');
        nav.classList.add('active');
    }
    return false;
});

window.addEventListener('resize', function() {
    if(window.innerWidth > 768) {
        nav.classList.remove('active');
        burger.classList.remove('active');
        burger.classList.add('no-animation');
    }
});