document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-color-btn');
    const text = document.getElementById('text');

    button.addEventListener('click', () => {
        text.style.color = 'red';
    });
});