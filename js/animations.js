let lion = document.querySelector(".hero__lion");

if (lion) {
  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;

    lion.style.transform = `translateY(-50%) translateY(${scrollY * 0.15}px)`;
  });
}
