const body = document.body;
const themeToggle = document.getElementById('dark-mode-toggle');
const themeIcon = themeToggle?.querySelector('span');
const mobileMenuButton = document.getElementById('menu-toggle');

// Helper function to apply theme toggle logic
function handleThemeToggleClick() {
    body.classList.toggle('light');
    
    // Check the *new* state after toggling
    if (body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
        // Switch to moon icon for light mode
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        // Switch to sun icon for dark mode
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Function that attaches theme toggle event listener
function initThemeToggle() {
    if (themeToggle) {
        // Set initial icon based on current theme
        if (body.classList.contains('light')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        themeToggle.addEventListener('click', handleThemeToggleClick);
    } else {
        console.error("Error: Could not find element with ID 'dark-mode-toggle'");
    }
}

// Function to handle mobile menu toggle
function handleMobileMenuClick() {
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            body.querySelector('.nav').classList.toggle('open');
        })
    }
}

// Function to close menu when clicking outside
function handleClickOutside() {
    document.addEventListener('click', (e) => {
        const nav = document.querySelector('.nav');

        if (nav && nav.classList.contains('open')) {
            // Check if the click was outside the nav element
            if (!nav.contains(e.target)) {
                nav.classList.remove('open');
            }
        }
    })
}

// Wait for the DOM to be fully loaded before running functions
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    handleMobileMenuClick();
    handleClickOutside();
});