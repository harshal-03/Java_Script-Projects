function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icons");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  
  // Change button text or icon
  if (document.body.classList.contains('dark-theme')) {
    themeToggleBtn.textContent = '🌜 Dark Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '🌞 Light Mode';
    localStorage.setItem('theme', 'light');
  }
});


