
    // Mendapatkan referensi elemen-elemen yang dibutuhkan
    const inputField = document.getElementById('inputField');
    const conversionButton = document.querySelector('.InputButtonSection button:nth-child(1)');
    const resetButton = document.querySelector('.InputButtonSection button:nth-child(2)');
    const reverseButton = document.querySelector('.InputButtonSection button:nth-child(3)');

    // Menambahkan event listener untuk tombol "Conversion"
    conversionButton.addEventListener('click', () => {
        const inputValue = inputField.value;
        if (inputValue !== '') {
            const celsius = parseFloat(inputValue);
            const fahrenheit = (celsius * 9 / 5) + 32;
            alert(`${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`);
        } else {
            alert('Please enter a valid temperature in Celsius.');
        }
    });

    // Menambahkan event listener untuk tombol "Reset"
    resetButton.addEventListener('click', () => {
        inputField.value = '';
    });

    // Menambahkan event listener untuk tombol "Reverse"
    reverseButton.addEventListener('click', () => {
        const inputValue = inputField.value;
        if (inputValue !== '') {
            const celsius = parseFloat(inputValue);
            const fahrenheit = (celsius * 9 / 5) + 32;
            const reversedCelsius = (fahrenheit - 32) * 5 / 9;
            alert(`${fahrenheit.toFixed(2)} Fahrenheit is equal to ${reversedCelsius.toFixed(2)} Celsius.`);
        } else {
            alert('Please enter a valid temperature in Celsius.');
        }
    });
