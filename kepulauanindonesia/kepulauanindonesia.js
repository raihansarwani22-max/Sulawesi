function openLight(el) {
  const lightbox = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightImg");
  lightImg.src = el.src;
  lightbox.style.display = "flex";
}

function closeLight() {
  document.getElementById("lightbox").style.display = "none";
}
