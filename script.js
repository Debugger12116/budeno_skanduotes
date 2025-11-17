document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".scandal-toggle");
  let expandedId = null;

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (!content) return;

      const isOpen = content.classList.contains("open");

      // Close all
      document.querySelectorAll(".scandal-content.open").forEach((el) => {
        el.classList.remove("open");
      });
      document.querySelectorAll(".card-header.expanded").forEach((el) => {
        el.classList.remove("expanded");
      });

      // Toggle current
      if (!isOpen) {
        content.classList.add("open");
        button.classList.add("expanded");
        expandedId = targetId;
      } else {
        expandedId = null;
      }
    });
  });
});
