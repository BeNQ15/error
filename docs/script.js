document.getElementById('errorButton').addEventListener('click', function() {
  const errors = [
    "Ошибка 404: Страница не найдена!",
    "Ошибка 500: Внутренняя ошибка сервера!",
    "Ошибка 403: Доступ запрещен!",
    "Ошибка 400: Неверный запрос!"
  ];

  const randomError = errors[Math.floor(Math.random() * errors.length)];
  alert(randomError);
});

let musicPlaying = false;
const music = document.getElementById('music');

document.getElementById('musicButton').addEventListener('click', function() {
  if (musicPlaying) {
    music.pause();
    music.currentTime = 0; // Сбросить позицию на начало
    musicPlaying = false;
  } else {
    music.play();
    musicPlaying = true;
  }
});
