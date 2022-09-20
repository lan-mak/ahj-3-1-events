export default class Logic {
  constructor() {
    this.missClick = 0;
    this.catchClick = 0;
  }

  checkClick() {
    if (this.missClick === 5) {
      alert(`Игра окончена! \n\nПопаданий: ${this.catchClick} \nПромахов: ${this.missClick}`); // eslint-disable-line
      this.missClick = 0;
      console.log(this.missClick);
    }
  }
}
