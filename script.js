document.addEventListener("DOMContentLoaded", function () {

  const faqTriggers = document.querySelectorAll(".faq-trigger");

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const parentItem = trigger.closest(".faq-item");
      const icon = trigger.querySelector(".faq-icon");
      const isActive = parentItem.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        const itemIcon = item.querySelector(".faq-icon");
        if (itemIcon) itemIcon.textContent = "+";
      });

      if (!isActive) {
        parentItem.classList.add("active");
        icon.textContent = "-";
      }
    });
  });

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! Hanadi will get back to you soon.");
      contactForm.reset();
    });
  }

});