document.body.style.backgroundColor = "#e0f2f1"; // Светло-зеленый фон
document.body.style.color = "#004d40"; // Темно-зеленый текст
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";

const h1 = document.querySelector('h1');
h1.style.color = "#00796b"; // Цвет заголовка

const button = document.getElementById('error-button');
button.style.backgroundColor = "#00796b"; // Цвет кнопки
button.style.color = "white";
button.style.border = "none";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.borderRadius = "5px";
button.style.marginTop = "20px";

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = "#004d40"; // Темно-зеленый при наведении
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = "#00796b"; // Возвращаем цвет кнопки
});

// Генерация ошибок
button.addEventListener('click', generateError);

function generateError() {
    const errors = [
        "Ошибка: Неверный формат файла.",
        "Ошибка: Файл не найден.",
        "Ошибка: Доступ запрещен.",
        "Ошибка: Внутренняя ошибка сервера.",
        "Ошибка: Превышено время ожидания."
    ];
    const randomIndex = Math.floor(Math.random() * errors.length);
    document.getElementById('error-message').innerText = errors[randomIndex];
}
