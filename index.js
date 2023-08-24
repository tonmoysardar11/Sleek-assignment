const hero = document.getElementById("hero");
hero.style.height = Number(window.innerWidth)*0.65 + "px";
const setHeroHeight = () => {
  const screenWidth = Number(window.innerWidth)*0.65;
  console.log(screenWidth);

  hero.style.height = screenWidth + "px";
};
window.addEventListener("resize", setHeroHeight);
