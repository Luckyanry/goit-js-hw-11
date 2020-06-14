/*
    Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
    Плагин показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. 
    Количество дней может состоять из более чем двух цифр.

    Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

    Для подсчета значений используй готовые формулы, где time - разница между targetDate и текущей датой.
*/

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;

    this.start();
  }

  start() {
    const targetDate = this.targetDate.getTime();

    const timeIsOut = setInterval(() => {
      const currentDate = new Date().getTime();
      const time = targetDate - currentDate;

      this.updateClockface(time, timeIsOut);
    }, 1000);
  }

  updateClockface(time, timeIsOut) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.selector.textContent = `${days}:${hours}:${mins}:${secs}`;

    if (time < 0) {
      clearInterval(timeIsOut);
      this.selector.textContent = "Your time is out!!!";
    }
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 20, 2020 18:00:00"),
});

//
//

// ====================================================================
// const refs = {
//   clockface: document.querySelector("#timer-1"),
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// };

// const timer = {
//   start() {
//     const targetDate = new Date("Jun 20, 2020 18:00:00").getTime();

//     const timeIsOut = setInterval(() => {
//       const currentDate = new Date().getTime();
//       const time = targetDate - currentDate;

//       updateClockface(time, timeIsOut);
//     }, 1000);
//   },
// };

// timer.start();

// function updateClockface(time, timeIsOut) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

// refs.days.textContent = days;
// refs.hours.textContent = hours;
// refs.mins.textContent = mins;
// refs.secs.textContent = secs;
// // refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;

//   if (time < 0) {
//     clearInterval(timeIsOut);

//     refs.clockface.textContent = "Your time is out!!!";
//   }
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }
