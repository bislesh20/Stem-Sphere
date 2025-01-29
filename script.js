document.addEventListener("DOMContentLoaded", () => {
  // Collaborators slider
  const dots = document.querySelectorAll(".slider-dots .dot");
  const logos = document.querySelectorAll(".collaborator-logos .logo");
  let currentSlide = 0;

  function showSlide(index) {
    logos.forEach((logo, i) => {
      logo.style.opacity = i === index ? "1" : "0.5";
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Auto-advance slides every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % logos.length;
    showSlide(currentSlide);
  }, 5000);

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert("Thank you for subscribing!");
      this.reset();
    }
  });
});
