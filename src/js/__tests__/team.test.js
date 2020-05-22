import Team from '../Team';

let temp = {};
let t = new Team(temp);
t.add();
let inter = t.getInterator();

test.each([{
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  },
  {
    name: 'Лучник2',
    type: 'Bowman2',
    health: 250,
    level: 21,
    attack: 240,
    defence: 210
  },
  {
    name: 'Лучник3',
    type: 'Bowman3',
    health: 350,
    level: 31,
    attack: 340,
    defence: 310
  },
])(('should equal'), (a) => {
  for (let value of inter) {
  expect(value).toEqual(a);}
});
