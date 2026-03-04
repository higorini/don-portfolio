(function () {
  var el = document.querySelector(".hero__name");
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = "Don...";
    return;
  }

  var texts = ["Don...", "Higor!"];
  var idx = 0;
  var cursor = document.createElement("span");
  cursor.className = "hero__typing-cursor";
  cursor.textContent = "|";

  function type(text, i) {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      setTimeout(function () { type(text, i + 1); }, 100);
    } else {
      setTimeout(function () { erase(text, text.length); }, 2000);
    }
  }

  function erase(text, i) {
    if (i >= 0) {
      el.textContent = text.slice(0, i);
      el.appendChild(cursor);
      setTimeout(function () { erase(text, i - 1); }, 60);
    } else {
      idx = (idx + 1) % texts.length;
      setTimeout(function () { type(texts[idx], 0); }, 200);
    }
  }

  type(texts[idx], 0);
})();
