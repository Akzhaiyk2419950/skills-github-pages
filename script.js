const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default scroll behavior

    const targetId = this.getAttribute('href').substring(1); // Remove '#' from href

    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the selected section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});