
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

function scrollCardDeck(direction) {
    const cardDeck = document.querySelector('.card-deck');
    const cardWidth = cardDeck.querySelector('.card').offsetWidth;
    cardDeck.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
    });
}



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