import { PRIZE_AMOUNT } from '/src/constants/lottoConfig';
import Calculator from '/src/models/services/Calculator';

describe('계산기 클래스 테스트', () => {
  test('당첨 결과에 따른 수익 금액을 계산하고 수익률을 반환한다.', () => {
    const INVESTMENT = 8000;
    const FIRST_FIFTH_PRIZE = [2, 3, 4, 7, 8, 9];
    const SECOND_FIFTH_PRIZE = [1, 2, 3, 7, 8, 9];
    const WINNING_RESULT = [
      [],
      [],
      [],
      [],
      [FIRST_FIFTH_PRIZE, SECOND_FIFTH_PRIZE],
    ];

    const PROFIT = PRIZE_AMOUNT[4] * 2;
    const PROFIT_RATE = Math.round((PROFIT / INVESTMENT) * 100 * 10) / 10;
    const calculator = new Calculator();

    expect(calculator.getProfitRate(INVESTMENT, WINNING_RESULT)).toBe(
      PROFIT_RATE
    );
  });
});
