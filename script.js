const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      return;
    }

    successMessage.textContent = 'Merci ! Votre message a bien été reçu.';
    successMessage.hidden = false;

    contactForm.reset();

    setTimeout(() => {
      successMessage.hidden = true;
    }, 5000);
  });
}
