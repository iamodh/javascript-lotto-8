const PRIZE_CONFIG = Object.freeze({
  COUNT: 5,
  CONDITION: {
    1: '6개 일치',
    2: '5개 일치, 보너스 볼 일치',
    3: '5개 일치',
    4: '4개 일치',
    5: '3개 일치',
  },
  MONEY: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  },
});

export default PRIZE_CONFIG;
