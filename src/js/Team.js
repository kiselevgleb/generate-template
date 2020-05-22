// TODO: write your code here
import Person from './Person';

export default class Team {
  constructor(team) {
    this.team = team;
  }

  add() {
    let p1 = new Person("Лучник", "Bowman", 50, 1, 40, 10);
    let p2 = new Person("Лучник2", "Bowman2", 250, 21, 240, 210);
    let p3 = new Person("Лучник3", "Bowman3", 350, 31, 340, 310);

    this.team[Symbol.iterator] = function* () {
      yield p1;
      yield p2;
      yield p3;
    }
  }

  getInterator() {
    let iterator = this.team[Symbol.iterator]();
    return iterator;
  }
}
