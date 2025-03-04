// Add animations or interactivity here
document.addEventListener("DOMContentLoaded", function () {
  // Example: Add animation to tools on scroll
  const toolCards = document.querySelectorAll(".tool-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__zoomIn");
        observer.unobserve(entry.target);
      }
    });
  });

  toolCards.forEach((card) => observer.observe(card));
});