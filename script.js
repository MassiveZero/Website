const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    const current = window.scrollY;

    if (current > lastScroll + 5) {
        header.style.transform = "translateY(-100%)";
    } else if (current < lastScroll - 5) {
        header.style.transform = "translateY(0)";
    }

    lastScroll = current;
});