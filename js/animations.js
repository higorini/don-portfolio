window.addEventListener("scroll", () => {
  const heroBg = document.querySelector(".project-hero__bg img");
  if (heroBg) {
    heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.15}px)`;
  }
}, { passive: true });

let lion = document.querySelector(".hero__lion");

if (lion) {
  const baseTransform = "translateY(-50%) translateX(0)";
  const strength = 0.25;

  function enableParallax() {
    function onScroll() {
      const scrollY = window.scrollY || 0;
      const offset = scrollY * strength;
      lion.style.transform = `translateY(calc(-50% + ${offset}px)) translateX(0)`;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function releaseAfterAnimation() {
    lion.style.animation = "none";
    lion.style.opacity = "0.12";
    lion.style.transform = baseTransform;
    enableParallax();
  }

  lion.addEventListener("animationend", (e) => {
    if (e.animationName !== "lionReveal") return;
    releaseAfterAnimation();
  });

  const cs = getComputedStyle(lion);
  const duration = parseFloat(cs.animationDuration) || 0;
  if (cs.animationName === "none" || duration === 0) {
    releaseAfterAnimation();
  }
}
