var sidemenu = document.getElementById("sideMenu");

function openMenu() {
  sidemenu.style.left = "0";
  sidemenu.style.display = "block";
}

function closeMenu() {
  sidemenu.style.left = "-100%";
}

let mybutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
