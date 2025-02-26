const style = document.createElement('style');
style.textContent = `
    body {
        background-color: #e0f2f1; /* Светло-зеленый фон */
        color: #004d40; /* Темно-зеленый текст */
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
    }
    h1 {
        color: #00796b; /* Цвет заголовка */
    }
    button {
        background-color: #00796b; /* Цвет кнопки */
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 20px;
    }
    button:hover {
        background-color: #004d40; /* Темно-зеленый при наведении */
    }
    .error-message {
        margin-top: 20px;
        color: red; /* Цвет сообщения об ошибке */
    }
`;
document.head.appendChild(style);

// Генерация ошибок
document.getElementById('error-button').addEventListener('click', generateError);

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
