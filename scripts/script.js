/****************************************/
          /* Hamburgermenu */
/****************************************/
// Werkgroep 5: Dé JS 3-stap

var deButton = document.querySelector("nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}

/****************************************/
        /* Scroller Homepagina */
/****************************************/
// bron: https://www.youtube.com/watch?v=iLmBy-HKIAw&t=18s (infinite scroll js)

const scrollers = document.querySelectorAll("[data-scroller]");

// reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector("[data-scroller-inner]");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
