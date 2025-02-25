const errorButton = document.getElementById('errorButton');
const errorMessage = document.getElementById('errorMessage');
const backgroundSound = document.getElementById('backgroundSound');
const toggleSoundButton = document.getElementById('toggleSoundButton');

const errors = [
    "Ошибка 404: Страница не найдена.",
    "Ошибка 500: Внутренняя ошибка сервера.",
    "Ошибка 403: Доступ запрещен.",
    "Ошибка 400: Неверный запрос.",
    "Ошибка 408: Время ожидания истекло.",
    "Ошибка 401: Неавторизованный доступ.",
    "Ошибка 502: Плохой шлюз.",
    "Ошибка 503: Сервис недоступен."
];

errorButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * errors.length);
    errorMessage.textContent = errors[randomIndex];
});

// Обработчик для кнопки включения/выключения звука
toggleSoundButton.addEventListener('click', () => {
    if (backgroundSound.paused) {
        backgroundSound.play();
        toggleSoundButton.textContent = 'Выключить звук';
    } else {
        backgroundSound.pause();
        toggleSoundButton.textContent = 'Включить звук';
    }
});
