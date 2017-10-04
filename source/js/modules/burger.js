module.exports = function() {
        const burger = document.querySelector('.btn-burger');
        const nav = document.querySelector('.nav-header');
        
        burger.onclick = function (e) {
            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                burger.classList.remove('no-animation');
            }
            else {
                burger.classList.add('active');
                burger.classList.remove('no-animation');
            }
            return false;
        }
}