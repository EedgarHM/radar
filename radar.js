// Carga el reproductor de YouTube solo al hacer clic (la página abre rápido y sin cookies de YouTube hasta entonces)
document.querySelectorAll(".video").forEach(function (caja) {
  var boton = caja.querySelector(".play");
  boton.addEventListener("click", function () {
    var marco = document.createElement("iframe");
    marco.src = "https://www.youtube-nocookie.com/embed/" + caja.dataset.id + "?autoplay=1&rel=0";
    marco.title = boton.getAttribute("aria-label");
    marco.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    marco.allowFullscreen = true;
    caja.replaceChildren(marco);
  });
});
