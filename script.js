
function onNavItemClick(sectionId) {
    const sections = document.querySelectorAll('.cards-container');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex';
}

// Optional: Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    onNavItemClick('cardscontainer');
});