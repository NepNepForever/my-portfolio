document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('calcModal');
    const closeModal = document.getElementById('closeCalcModal');
    const calculateBtn = document.getElementById('calculateBtn');
    const calcResult = document.getElementById('calcResult');
    const calcButtons = document.querySelectorAll('.calc-btn');

    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    calculateBtn.addEventListener('click', () => {
        const area = document.getElementById('area').value;
        const pricePerSqm = document.getElementById('pricePerSqm').value;
        const totalCost = area * pricePerSqm;

        calcResult.textContent = `Стоимость: ${totalCost} руб.`;
    });
});