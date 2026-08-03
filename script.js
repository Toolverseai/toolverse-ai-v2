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
