console.log("ToolVerse AI Loaded 🚀");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Search AI Tools
const searchInput = document.getElementById("searchInput");
const toolCards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  toolCards.forEach((card) => {
    const text = card.textContent.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// ToolVerse AI - Remove duplicate tool cards
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll("#tools .tool-card");
  const seen = new Set();

  cards.forEach(card => {
    const title = card.querySelector("h2");

    if (!title) return;

    let name = title.textContent
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

    name = name
      .replace(/\s+ai$/g, "")
      .replace(/\s+plus$/g, "");

    if (seen.has(name)) {
      card.remove();
    } else {
      seen.add(name);
    }
  });

  console.log("ToolVerse AI: duplicate tools cleaned.");
});
