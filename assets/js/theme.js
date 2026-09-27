// Mode sombre — https://latex.vercel.app/ ("Dark mode")
// Le body démarre en `latex-dark-auto` (suit prefers-color-scheme).
// L'interrupteur pose un choix explicite `latex-dark` et le mémorise.
(function () {
  var body = document.body;
  var input = document.querySelector("#dark-mode-toggle");
  if (!input) return;

  var stored = null;
  try { stored = localStorage.getItem("latex-theme"); } catch (e) {}
  if (stored === "dark" || stored === "light") {
    body.classList.remove("latex-dark-auto");
    body.classList.toggle("latex-dark", stored === "dark");
  }

  input.checked = body.classList.contains("latex-dark") ||
    (body.classList.contains("latex-dark-auto") &&
     window.matchMedia("(prefers-color-scheme: dark)").matches);

  input.addEventListener("change", function () {
    body.classList.remove("latex-dark-auto");
    body.classList.toggle("latex-dark", input.checked);
    try { localStorage.setItem("latex-theme", input.checked ? "dark" : "light"); } catch (e) {}
  });
})();
