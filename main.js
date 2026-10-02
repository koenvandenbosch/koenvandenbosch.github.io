/* Mobile menu (☰) and "Abstract ▸ / ▾" toggles. No dependencies. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
    });
  }

  function setAbstract(btn, open) {
    var box = document.getElementById(btn.getAttribute("aria-controls"));
    if (!box) return;
    box.hidden = !open;
    btn.setAttribute("aria-expanded", open);
    btn.textContent = open ? "Abstract ▾" : "Abstract ▸";
  }

  document.querySelectorAll(".abstract-toggle").forEach(function (btn) {
    setAbstract(btn, btn.getAttribute("aria-expanded") === "true");
    btn.addEventListener("click", function () {
      setAbstract(btn, btn.getAttribute("aria-expanded") !== "true");
    });
  });

  /* A link like research.html#jmp opens that paper's abstract */
  if (location.hash) {
    var card = document.getElementById(location.hash.slice(1));
    var btn = card && card.querySelector(".abstract-toggle");
    if (btn) setAbstract(btn, true);
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
