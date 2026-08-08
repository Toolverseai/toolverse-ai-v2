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
// ToolVerse AI - Category Filters
document.addEventListener("DOMContentLoaded", () => {

  const filterButtons = document.querySelectorAll(".buttons button");
  const cards = document.querySelectorAll("#tools .tool-card");
  const searchInput = document.getElementById("searchInput");

  let activeCategory = "all";

  function filterTools() {
    const searchValue = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();

      const categoryMatch =
        activeCategory === "all" ||
        text.includes(activeCategory);

      const searchMatch =
        text.includes(searchValue);

      card.style.display =
        categoryMatch && searchMatch ? "block" : "none";
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      const buttonText = button.textContent
        .toLowerCase()
        .trim();

      if (buttonText.includes("popular")) {
        activeCategory = "popular";
      } else if (buttonText.includes("new")) {
        activeCategory = "new";
      } else if (buttonText.includes("free")) {
        activeCategory = "free";
      } else if (buttonText.includes("writing")) {
        activeCategory = "writing";
      } else if (buttonText.includes("image")) {
        activeCategory = "image";
      } else if (buttonText.includes("video")) {
        activeCategory = "video";
      } else if (buttonText.includes("coding")) {
        activeCategory = "coding";
      }

      filterTools();
    });
  });

  searchInput.addEventListener("input", filterTools);

});
