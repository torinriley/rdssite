
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    
    document.querySelectorAll('.timeline-content').forEach((element) => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    
    document.querySelectorAll('.text-block-container').forEach((element) => {
        observer.observe(element);
    });
});


// Get all modals and buttons
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.learn-more-btn');
const closeBtns = document.querySelectorAll('.close');

// When the user clicks a button, open the corresponding modal
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// When the user clicks on <span> (x), close the modal
closeBtns.forEach(close => {
    close.addEventListener('click', function() {
        modals.forEach(modal => modal.style.display = 'none');
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};
