const menuButton = document.getElementById("menu-btn")
if(menuButton != null){
    menuButton.addEventListener('click', lastLoad);
}

function openInstagram(){
    window.open('https://www.instagram.com/anthonya_d/');
}

function lastLoad(){
    window.history.go(-1); return false;
}
