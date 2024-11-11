function toggleMenu()
{
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openNewWindow() {
    window.open(
        "Sailesh_Kumar-Resume.pdf"
    );
}

function gitLoc()
{
    window.location.href='https://github.com/Sailesh-K';
}
function linLoc()
{
    window.location.href='https://www.linkedin.com/in/sailesh-kumar-29j06un/';
}