const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
        formMessage.textContent = "Thanks! I'll get back to you soon.";
        form.reset();
    } else {
        formMessage.textContent = "Something went wrong. Please try again.";
    }
});