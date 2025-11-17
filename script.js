// ← ← ← ČIA REDAGUOK SKANDUOTES
const scandals = [
  {
    title: "Test",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Test 2 (per kelias eilutes)",
    content: `pirma eilute
    antra eilute                                
    trecia eilute
    ketvirta eilute`
  } // kad perkelti i kita eilute galima rasyti teksta per kelias eilutes arba naudoti \n

];
// → → → TIEK

// ----------- AUTOMATINĖ GENERACIJA -----------
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  scandals.forEach((scandal, index) => {
    const id = `scandal-${index}`;

    // HTML template
    const cardHTML = `
      <article class="card">
        <button class="card-header scandal-toggle" data-target="${id}">
          <div class="card-title-wrap">
            <h2 class="card-title">${scandal.title}</h2>
          </div>

          <span class="chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>

        <div id="${id}" class="card-body scandal-content">
          <p style="white-space: pre-line;">${scandal.content}</p>
        </div>
      </article>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Toggle behavior (galima daug atidaryti vienu metu)
  const toggles = document.querySelectorAll(".scandal-toggle");

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (!content) return;

      const isOpen = content.classList.contains("open");

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
