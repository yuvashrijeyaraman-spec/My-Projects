// Scroll to contact section when clicking "Hire Me"
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Simple form submission (no backend)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! I will get back to you soon.");
});

// Form handler (Contact Page)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}
