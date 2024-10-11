// JavaScript for triggering the animation on timeline content when in view
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Select all elements with the class 'timeline-content'
    document.querySelectorAll('.timeline-content').forEach((element) => {
        observer.observe(element);
    });
});