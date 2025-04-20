document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const imcValue = document.getElementById('imc-value');
    const imcCategory = document.getElementById('imc-category');

    calculateButton.addEventListener('click', calculateIMC);

    function calculateIMC() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convertir cm a metros

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Por favor, ingresa valores válidos para peso y altura.');
            return;
        }

        const imc = weight / (height * height);
        imcValue.textContent = imc.toFixed(1);

        // Categorizar IMC
        let category = '';
        if (imc < 18.5) {
            category = 'Bajo peso';
        } else if (imc < 25) {
            category = 'Peso normal';
        } else if (imc < 30) {
            category = 'Sobrepeso';
        } else if (imc < 35) {
            category = 'Obesidad grado I';
        } else if (imc < 40) {
            category = 'Obesidad grado II';
        } else {
            category = 'Obesidad grado III';
        }

        imcCategory.textContent = category;
    }
});