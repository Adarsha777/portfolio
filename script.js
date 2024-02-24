const portfolioLogo = document.getElementById("portfolioLogo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    portfolioLogo.style.display = "none";
  } else {
    portfolioLogo.style.display = "block";
  }
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    portfolioLogo.style.display = "none";

    header.classList.add("scrolled");
  } else {
    portfolioLogo.style.display = "block";

    header.classList.remove("scrolled");
  }

  const scrollLinks = document.querySelectorAll(".scroll-link");

  window.addEventListener("scroll", function () {
    let fromTop = window.scrollY + window.innerHeight / 2;

    scrollLinks.forEach(function (link) {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 

      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (section) { 
        const offset = 70; 

        window.scrollTo({
          top: sectionId === "home" ? 0 : section.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });
});
