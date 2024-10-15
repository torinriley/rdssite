document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    });
});

// Close the modal when clicking on the "close" button
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').style.display = "none";
    });
});

// Close modal when clicking outside of it
window.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});