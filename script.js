// JavaScript for search functionality
document.addEventListener('DOMContentLoaded', function() {
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', function() {
    this.parentElement.style.boxShadow = '0 0 0 2px var(--accent)';
});

searchInput.addEventListener('blur', function() {
    this.parentElement.style.boxShadow = 'none';
});

// Simple filtering functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const text = card.querySelector('.card-text').textContent.toLowerCase();
    const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
    
    // Check if card contains search term in title, text or tags
    const isVisible = 
        title.includes(searchTerm) || 
        text.includes(searchTerm) || 
        tags.some(tag => tag.includes(searchTerm));
    
    // Toggle visibility
    card.style.display = isVisible ? 'block' : 'none';
    });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    });
});

// Card hover effect enhancement
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
    this.style.borderColor = 'var(--accent)';
    });
    
    card.addEventListener('mouseleave', function() {
    this.style.borderColor = 'var(--border-color)';
    });
    
    card.addEventListener('click', function() {
    // Simulate navigation to writeup details page
    console.log('Navigating to writeup:', this.querySelector('.card-title').textContent);
    // In a real implementation, you would use window.location or history API
    });
});
});