module.exports = function() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('#main-nav');
        
        burger.onclick = function (e) {
            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                burger.classList.remove('no-animation');
                nav.style.opacity = '0';
                setTimeout(function() {
                   nav.style.left = '-9999px';  
                }, 500)
            }
            else {
                burger.classList.add('active');
                burger.classList.remove('no-animation');
                nav.style.left = '0'; 
                nav.style.opacity = '1';   
            }
            return false;
        }
}