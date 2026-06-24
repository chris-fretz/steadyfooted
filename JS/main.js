const body = document.body;
const themeToggle = document.getElementById('dark-mode-toggle');
const themeIcon = themeToggle?.querySelector('span');

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

// Function that attaches the event listener
function initThemeToggle() {
    if (themeToggle) {
        // Set initial icon based on current theme
        if (body.classList.contains('light')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        themeToggle.addEventListener('click', handleThemeToggleClick);
    } else {
        console.error("Error: Could not find element with ID 'dark-mode-toggle'");
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
});