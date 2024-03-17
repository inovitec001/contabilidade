function openWhatsApp() {
    var phoneNumber = '5561993969399';
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var greeting = '';

    if (currentHour >= 0 && currentHour < 12) {
        greeting = 'Bom dia, ';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Boa tarde, ';
    } else {
        greeting = 'Boa noite, ';
    }

    var message = greeting + 'Gostaria de fazer um orçamento!';
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappURL);
}

const button = document.getElementById('oscilating-button');

setInterval(() => {
    const currentSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue('font-size'));
    const newSize = currentSize + 2; // Ajuste o valor para controlar a amplitude da oscilação
    button.style.fontSize = `${newSize}px`;
}, 500);



