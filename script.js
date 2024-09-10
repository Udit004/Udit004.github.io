// Toggle Dark Mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');
    this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Update progress bars based on data attribute
document.querySelectorAll('.progress-bar').forEach(function(bar) {
    const skillLevel = bar.getAttribute('data-skill-level');
    bar.querySelector('::after').style.width = skillLevel + '%';
});
