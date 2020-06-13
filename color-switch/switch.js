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

const colorChanger = {
  intervalId: null,
  clickIsActive: false,

  start() {
    if (this.clickIsActive) {
      return;
    }
    this.clickIsActive = true;

    this.intervalId = setInterval(() => {
      this.randomizer();
    }, 1000);
  },

  stop() {
    this.clickIsActive = false;
    clearInterval(this.intervalId);
  },

  randomizer() {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);

    refs.body.style.backgroundColor = `${colors[randomIndex]}`;
  },
};

refs.start.addEventListener("click", colorChanger.start.bind(colorChanger));
refs.stop.addEventListener("click", colorChanger.stop.bind(colorChanger));

//
//

// ======================================================================
// let intervalId;
// let clickIsActive = false;

// const changeStart = () => {
//   if (clickIsActive) {
//     return;
//   }

//   clickIsActive = true;
//   intervalId = setInterval(randomizer, 1000);
// };

// const changeStop = () => {
//   clickIsActive = false;
//   clearInterval(intervalId);
// };

// refs.start.addEventListener("click", changeStart);
// refs.stop.addEventListener("click", changeStop);

// const randomizer = () => {
//   const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

//   let randomIndex = randomIntegerFromInterval(0, colors.length - 1);

//   refs.body.style.backgroundColor = `${colors[randomIndex]}`;
// };
