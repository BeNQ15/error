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
