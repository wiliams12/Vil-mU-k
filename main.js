const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

const projects = document.querySelectorAll('#personal-projects li');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});


navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

projects.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    document.addEventListener('click', () => {
      item.classList.remove('active');
    })
  })
})