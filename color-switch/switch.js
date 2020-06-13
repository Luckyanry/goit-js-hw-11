/*
    Есть массив цветов в hex-формате и кнопки Start и Stop.
    Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
    на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, 
    изменение цвета фона должно останавливаться.

    ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
    Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

    Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
*/

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

refs.start.addEventListener("click", changeStart);

const randomizer = () => {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let randomIndex = randomIntegerFromInterval(0, colors.length - 1);

  refs.body.style.backgroundColor = `${colors[randomIndex]}`;
};

function changeStart() {
  const intervalId = setInterval(randomizer, 1000);

  refs.stop.addEventListener("click", changeStop);

  function changeStop() {
    clearInterval(intervalId);
  }
}
