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

const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.learn-more-btn');
const closeBtns = document.querySelectorAll('.close');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

closeBtns.forEach(close => {
    close.addEventListener('click', function() {
        modals.forEach(modal => modal.style.display = 'none');
    });
});

window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};




document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector(".typing-text");
    const thinkingSection = document.querySelector(".loading-section");

    // Create caret element dynamically
    const caretDot = document.createElement("div");
    caretDot.classList.add("caret-dot");

    // Content to be typed out
    const part1 = `RDS AI is an open-source project that pushes the boundaries of AI, 
enabling machines to adapt, learn, and evolve based on `;
    const part2 = `reflective dialogue systems.`; // Gradient part

    // Create a span for the gradient-styled text
    const gradientSpan = document.createElement('span');
    gradientSpan.classList.add('gradient-text');

    // Simulate typing effect
    function typeText(text, element, delay = 50, callback) {
        let index = 0;
        element.style.display = "block";
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                element.appendChild(caretDot);  // Re-append caret after each character
                index++;
                setTimeout(type, delay);
            } else if (callback) {
                callback();  // Call the callback function (to start typing part2) after part1
            }
        }
        type();
    }

    // Typing part2 with gradient
    function typeGradientText(text, element, delay = 50, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                element.appendChild(caretDot);  // Re-append caret after each character
                index++;
                setTimeout(type, delay);
            } else {
                caretDot.classList.add("caret-fade-out"); // Fade-out caret after typing is done
            }
        }
        type();
    }

    // Show the thinking animation for 3 seconds, then type the text
    setTimeout(() => {
        thinkingSection.style.display = "none"; // Hide thinking animation
        
        // First, type part1
        typeText(part1, typingText, 50, () => {
            // After part1, start typing part2 (with gradient)
            typingText.appendChild(gradientSpan); // Add the gradient span to the DOM
            typeGradientText(part2, gradientSpan); // Type the gradient text
        });

    }, 3000); // Wait for 3 seconds
});
