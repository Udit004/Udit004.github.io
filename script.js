document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Load the user's theme preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-toggle').textContent = 'Light Mode';
    }
});

document.querySelectorAll('.progress-bar').forEach(function(bar) {
    const skillLevel = bar.getAttribute('data-skill-level');
    bar.style.width = skillLevel + '%'; // Removed '::after', directly updated the element
});
