const btnMobile = document.getElementById(btn-mobile);

function toggleMenu(){
    const topNav = document.getElementById(topNav);
    topNav.classList.toggle('active');

}


btnMobile.addEventListener('click', toggleMenu);