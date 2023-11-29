// Click menu
const btnMenu = document.getElementById("btn-show-menu");
const elementMenu = document.getElementById("elementMenu");

btnMenu.addEventListener("click", function () {
  elementMenu.classList.toggle("show-menu");
});

// Fixed menu
window.addEventListener("scroll", function () {
  var scrollPos = window.scrollY;
  const menu = this.document.getElementById("header");
// Kiểm tra vị trí menu
  if (scrollPos > menu.offsetTop) {
    menu.classList.add("fixed-menu");
  } else {
    menu.classList.remove("fixed-menu");
  }

  // Kiểm tra vị trí cuộn trang và active menu
  document.querySelectorAll("section").forEach((section) => {
    const secId = section.getAttribute("id");
    const secOffset = section.offsetTop;
    const secHeight = section.offsetHeight;

    if (scrollPos >= secOffset && scrollPos < secOffset + secHeight) {
      document.querySelectorAll(".navbar ul li a").forEach((link) => {
        link.classList.remove("menu__active");
      });

      const activeLink = document.querySelector(
        '.navbar ul li a[href="#' + secId + '"]'
      );
      if (activeLink) {
        activeLink.classList.add("menu__active");
      }
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
