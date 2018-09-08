
window.onload = () => {
  let timer = new Timer('.timer', 15000);
  timer.start();

  let form = document.querySelector('.form');
  let name = document.querySelector('.name-field');
  let tel = document.querySelector('.tel-field');
  let email = document.querySelector('.email-field');

  let validateForm = (evt) => {
    if (!name.value || !tel.value || !email.value) {
      evt.preventDefault();
    }
  };

  form.addEventListener('submit', validateForm);
}

class Timer {
  constructor (selector, time) {
    this.element = document.querySelector(selector);
    this.time = time;
    this.render();
    this.timer;
  }

  getTimeItems () {
    let items = {};

    items.h = parseInt(this.time / 3600);
    let hs = this.time % 3600;
    //Секунды, которые не поместились в часы

    items.m = parseInt(hs / 60);
    items.s = hs % 60;
    // Секунды, которые не поместились в минуты

    items.s < 10 ? items.s = '0' + items.s : items.s;
   
    return items;
  }

  render () {
    let t = this.getTimeItems();

    this.element.textContent = `${t.h}:${t.m}:${t.s}`;
  }

  tick () {
    this.time--;
    this.render();

    if (this.time <= 0) {
      this.stop();
    }
  }

  start () {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  stop () {
    clearInterval(this.timer);
  }  
}

