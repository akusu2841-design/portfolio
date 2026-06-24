// Back Button
const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    history.back();
  });
}

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Redirect Buttons
const buttons = document.querySelectorAll(".vBtn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = button.dataset.url;
  });
});

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

  // Initialize EmailJS
  emailjs.init({
    publicKey: "wAjPi_RdXifi5CZNw"
  });

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_egluhxm",
        "template_w73ml7r",
        this
      )
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      });
    });
  }

});
