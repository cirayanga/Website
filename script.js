// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple interaction
document.getElementById("helloBtn").addEventListener("click", () => {
  alert("Hello from your first website! 🎉");
});

// Fake contact form handler (no backend yet)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) return;

  document.getElementById("status").textContent =
    `Thanks, ${name}! I received your message.`;
  e.target.reset();
});
