import PRIZE_CONFIG from '/src/constants/PrizeConfig';
import Calculator from '/src/models/services/Calculator';

describe('계산기 클래스 테스트', () => {
  test('당첨 결과에 따른 수익 금액을 계산하고 수익률을 반환한다.', () => {
    const PURCHASE_MONEY = 8000;
    const FIRST_FIFTH_PRIZE = [2, 3, 4, 7, 8, 9];
    const SECOND_FIFTH_PRIZE = [1, 2, 3, 7, 8, 9];
    const WINNING_STATISTIC = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [FIRST_FIFTH_PRIZE, SECOND_FIFTH_PRIZE],
    };

    const PROFIT = PRIZE_CONFIG.MONEY[5] * 2;
    const PROFIT_RATE = Math.round((PROFIT / PURCHASE_MONEY) * 100 * 10) / 10;

    const calculator = new Calculator();

    expect(calculator.getProfitRate(PURCHASE_MONEY, WINNING_STATISTIC)).toBe(
      PROFIT_RATE
    );
  });
});
