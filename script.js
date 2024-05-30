document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const resetButton = document.getElementById('reset-button');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const countElement = this.nextElementSibling;
            let count = parseInt(countElement.textContent);
            count += 1;
            countElement.textContent = count;
        });
    });

    resetButton.addEventListener('click', function() {
        const counts = document.querySelectorAll('.click-count');
        counts.forEach(countElement => {
            countElement.textContent = '0';
        });
    });
});
