"use strict";

// Define variables
const mobileMenuButton = document.getElementById('menu-toggle');

// Mobile Menu event handler
const handleMobileMenuClick = function() {
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.querySelector('.nav').classList.toggle('open');
        })
    }
}

// Function to close menu when clicking outside
const handleClickOutside = function() {
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

// Displays current year
const displayCurrentYear = () => {
    const year = document.getElementById('year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

// Wait for the DOM to be fully loaded before running functions
document.addEventListener('DOMContentLoaded', function() {
    handleMobileMenuClick();
    handleClickOutside();
    displayCurrentYear();
});