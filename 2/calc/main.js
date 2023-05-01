document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');
    const calcBtn = document.getElementById('calc-btn');

    calcBtn.addEventListener('click', () => {
        const sum = parseInt(num1.value) + parseInt(num2.value);
        result.textContent = sum;
    });
});