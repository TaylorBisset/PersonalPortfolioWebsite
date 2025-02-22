// ============================= //
// - - - - - script.js - - - - - //
// ============================= //

const themeToggle = document.getElementById('theme-toggle');

// Check if a theme is already set in localStorage
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-theme');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');

    // Store the user's preference in localStorage
    if (document.documentElement.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});