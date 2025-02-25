const errorButton = document.getElementById('errorButton');
const errorMessage = document.getElementById('errorMessage');
const backgroundSound = document.getElementById('backgroundSound');
const backgroundButton = document.getElementById('backgroundButton');
const errorSound = document.getElementById('errorSound');

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

// Массив с путями к MP3 трекам
const tracks = [
    'docs/track1.mp3', // Замените на путь к вашему треку
    'docs/track2.mp3', // Добавьте другие треки по мере необходимости
    'docs/track3.mp3'
];

errorButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * errors.length);
    errorMessage.textContent = errors[randomIndex];
    errorSound.play(); // Воспроизводим звук ошибки
});

// Обработчик для кнопки включения/выключения фоновой музыки
backgroundButton.addEventListener('click', () => {
    if (backgroundSound.paused) {
        const randomTrackIndex = Math.floor(Math.random() * tracks.length);
        backgroundSound.src = tracks[randomTrackIndex]; // Устанавливаем случайный трек
        backgroundSound.play();
        backgroundButton.textContent = 'Стоп'; // Меняем текст на "Стоп"
    } else {
        backgroundSound.pause();
        backgroundButton.textContent = 'Включить фон'; // Меняем текст на "Включить фон"
    }
});
