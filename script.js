document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".scandal-toggle");

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (!content) return;

      const isOpen = content.classList.contains("open");

      // Paprastas toggle – NEbeuždarom kitų
      if (isOpen) {
        content.classList.remove("open");
        button.classList.remove("expanded");
      } else {
        content.classList.add("open");
        button.classList.add("expanded");
      }
    });
  });
});
