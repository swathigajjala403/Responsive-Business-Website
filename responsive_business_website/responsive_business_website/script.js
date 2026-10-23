const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();

  feedback.textContent = `Thanks, ${name}! The form is valid. This demo does not send messages to a server.`;
  feedback.className = "mt-3 mb-0 text-success";
  contactForm.reset();
});
