function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("hero-anchor").style.overflow = "hidden";
    document.getElementById("sticky").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("hero-anchor").style.overflow = "auto";
    document.getElementById("sticky").style.display = "block";
}