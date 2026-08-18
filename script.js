const mobileCta = document.querySelector(".mobile-cta");
const hero = document.querySelector(".hero");

if (mobileCta && hero && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      mobileCta.classList.toggle("is-hidden", entry.isIntersecting);
    },
    { threshold: 0.08 }
  );

  observer.observe(hero);
} else if (mobileCta) {
  mobileCta.classList.remove("is-hidden");
}
