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

    const caretDot = document.createElement("div");
    caretDot.classList.add("caret-dot");

    const part1 = `RDS AI is an open-source project that pushes the boundaries of AI, 
enabling machines to adapt, learn, and evolve based on `;
    const part2 = `reflective dialogue systems.`;

    const gradientSpan = document.createElement('span');
    gradientSpan.classList.add('gradient-text');

    function typeText(text, element, delay = 50, callback) {
        let index = 0;
        element.style.display = "block";
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                element.appendChild(caretDot);  
                index++;
                setTimeout(type, delay);
            } else if (callback) {
                callback();  
            }
        }
        type();
    }

    function typeGradientText(text, element, delay = 50) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                element.appendChild(caretDot); 
                index++;
                setTimeout(type, delay);
            } else {
                caretDot.classList.add("caret-fade-out"); 
            }
        }
        type();
    }

    setTimeout(() => {
        thinkingSection.style.display = "none";
        
        typeText(part1, typingText, 50, () => {
            typingText.appendChild(gradientSpan);
            typeGradientText(part2, gradientSpan);
        });

    }, 1500); 
});

document.addEventListener("DOMContentLoaded", function () {
    const timelineSection = document.querySelector(".timeline");

    const options = {
        root: null, 
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-timeline');
                }, 0); 
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(timelineSection);
});

document.querySelector('.tooltip-button').addEventListener('click', function() {
    const tooltip = document.getElementById('contribution-tooltip');
    tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
});

function toggleTooltip() {
    const tooltip = document.getElementById('contribution-tooltip');
    tooltip.style.display = 'none';
}
