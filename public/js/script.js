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


// JQuery Section fade-in script
$(document).ready(function () {
    $("section").not(".hero").css("opacity", 0); // Set initial opacity to 0

    $(window).on("scroll", function () {
        $("section").each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).css("opacity", 1); 
            }
        });
    });
});
