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

// Initialize Particles.js
particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('Particles.js loaded');
});

// Initialize Typed.js
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#typed-text', {
        strings: [
            "A technical writer.",
            "An editor.",
            "A storyteller.",
            "A creative writer.",
            "An educator."
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});

// Contact form submission validation script
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    let formData = new FormData(this); // Get form data

    fetch("php/contact.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text()) // Get the response as text
        .then(data => {
            document.getElementById("responseMessage").textContent = data; // Show response message
            if (data.includes("successfully")) {
                this.reset(); // Clear form fields
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("responseMessage").textContent = "Something went wrong. Try again.";
        });
});
