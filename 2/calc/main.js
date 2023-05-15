
document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');
    const operator = document.getElementById('operator');
    const calcBtn = document.getElementById('calc-btn');

    calcBtn.addEventListener('click', () => {

        if (operator.value === 'plus') {
            result.textContent = parseInt(num1.value) + parseInt(num2.value);
        } else if (operator.value === 'minus') {
            result.textContent = parseInt(num1.value) - parseInt(num2.value);
        } else if (operator.value === 'multiply') {
            result.textContent = parseInt(num1.value) * parseInt(num2.value);
        } else if (operator.value === 'divide') {
            result.textContent = parseInt(num1.value) / parseInt(num2.value);
        }   
    });
});