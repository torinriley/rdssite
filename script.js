// Accordion toggle functionality
function toggleFaq(index) {
    const faqItems = document.querySelectorAll('.accordion-item');
    faqItems.forEach((item, idx) => {
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        if (idx === index) {
            content.style.maxHeight = content.style.maxHeight ? null : '200px';
            icon.textContent = content.style.maxHeight ? '-' : '+';
        } else {
            content.style.maxHeight = null;
            icon.textContent = '+';
        }
    });
}

// Scroll card deck functionality
function scrollCardDeck(direction) {
    const cardDeck = document.querySelector('.card-deck');
    const cardWidth = cardDeck.querySelector('.card').offsetWidth;
    cardDeck.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
    });
}


// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.text-section, .benefits-container').forEach((element) => {
        observer.observe(element);
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function closeModalOutside(event, modalId) {
    const modal = document.getElementById(modalId);
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
