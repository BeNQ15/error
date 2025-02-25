const errorButton = document.getElementById('errorButton');
const errorMessage = document.getElementById('errorMessage');
const backgroundSound = document.getElementById('backgroundSound');
const toggleSoundButton = document.getElementById('toggleSoundButton');
const streamSource = document.getElementById('streamSource');

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

// Функция для получения URL радиостанции из базы данных
async function loadRadioStation() {
    try {
        const response = await fetch('/api/get_station'); // URL вашего API для получения станции
        const data = await response.json();
        if (data.url) {
            streamSource.src = data.url; // Устанавливаем URL радиостанции
            backgroundSound.load(); // Перезагружаем аудио элемент
        } else {
            console.error('URL радиостанции не найден.');
        }
    } catch (error) {
        console.error('Ошибка при загрузке радиостанции:', error);
    }
}

// Загружаем радиостанцию при инициализации
loadRadioStation();

errorButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * errors.length);
    errorMessage.textContent = errors[randomIndex];
});

// Обработчик для кнопки включения/выключения радиостанции
toggleSoundButton.addEventListener('click', () => {
    if (backgroundSound.paused) {
        backgroundSound.play();
        toggleSoundButton.textContent = 'Стоп'; // Меняем текст на "Стоп"
    } else {
        backgroundSound.pause();
        toggleSoundButton.textContent = 'Включить'; // Меняем текст на "Включить"
    }
});
