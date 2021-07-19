var coll = document.getElementsByClassName("menu__link");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (navbar__menu.style.display === "block") {
      navbar__menu.style.display = "none";
    } else {
      navbar__menu.style.display = "block";
    }
  });
}
