document.getElementById("navbar-toggle").addEventListener("click", function() {
    var navbarLinks = document.getElementById("navbar-links");
    if (navbarLinks.style.display === "none" || navbarLinks.style.display === "") {
      navbarLinks.style.display = "flex";
    } else {
      navbarLinks.style.display = "none";
    }
  });
  