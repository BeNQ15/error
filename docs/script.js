document.addEventListener('DOMContentLoaded', function() {
    const errorButton = document.createElement('button');
    errorButton.id = 'error-button';
    errorButton.innerText = 'Ошибка';
    document.body.appendChild(errorButton);

    const errorMessageDiv = document.createElement('div');
    errorMessageDiv.className = 'error-message';
    document.body.appendChild(errorMessageDiv);

    errorButton.addEventListener('click', function() {
        const errors = [
            "Ошибка: Неверный формат файла.",
            "Ошибка: Файл не найден.",
            "Ошибка: Доступ запрещен.",
            "Ошибка: Внутренняя ошибка сервера.",
            "Ошибка: Превышено время ожидания."
        ];
        const randomIndex = Math.floor(Math.random() * errors.length);
        errorMessageDiv.innerText = errors[randomIndex];
    });
});
