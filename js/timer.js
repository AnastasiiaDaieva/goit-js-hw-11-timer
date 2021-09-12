import refs from './refs.js';

const { daysValue, hoursValue, minutesValue, secondsValue } = refs;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.interval = null;
    this.time = 0;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      let currentDate = Date.now();
      this.time = this.targetDate - currentDate;

      this.insertNumber(daysValue, this.getDays(this.time));
      this.insertNumber(hoursValue, this.getHours(this.time));
      this.insertNumber(minutesValue, this.getMins(this.time));
      this.insertNumber(secondsValue, this.getSecs(this.time));
    }, 1000);
  }

  insertNumber(element, value) {
    element.textContent = value;
  }

  padValue(value, number, symbol) {
    return String(value).padStart(number, symbol);
  }

  getDays(time) {
    return this.padValue(Math.floor(time / (1000 * 60 * 60 * 24)), 3, '0');
  }

  getHours(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      '0',
    );
  }

  getMins(time) {
    return this.padValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      '0',
    );
  }

  getSecs(time) {
    return this.padValue(Math.floor((time % (1000 * 60)) / 1000), 2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('July 28, 2023'),
});
