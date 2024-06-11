//FAQ Script
document.addEventListener("DOMContentLoaded", function() {
  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach(function(faqToggle) {
    const answer = faqToggle.nextElementSibling;
    const plusIcon = faqToggle.querySelector(".plus-icon");
    const minusIcon = faqToggle.querySelector(".minus-icon");

    faqToggle.addEventListener("click", function() {
      // Close previously opened answers
      document.querySelectorAll('.faq-toggle').forEach(function(toggle) {
        if (toggle !== faqToggle) {
          const otherAnswer = toggle.nextElementSibling;
          const otherPlusIcon = toggle.querySelector(".plus-icon");
          const otherMinusIcon = toggle.querySelector(".minus-icon");
          otherAnswer.classList.add('hidden');
          otherPlusIcon.classList.remove('hidden');
          otherMinusIcon.classList.add('hidden');
        }
      });

      // Toggle current answer
      answer.classList.toggle("hidden");
      plusIcon.classList.toggle("hidden");
      minusIcon.classList.toggle("hidden");
    });
  });
});
