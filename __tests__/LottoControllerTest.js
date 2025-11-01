import LottoController from '../src/controllers/LottoController';
import { mockRandoms } from '../src/utils/mocks';

describe('로또 컨트롤러 클래스 테스트', () => {
  test('유저가 가진 모든 금액으로 로또를 구매한 뒤 당첨 결과를 반환한다.', () => {
    const INVESTMENT = 8000;
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    const EXPECTED_RESULT = [[], [], [], [], [[1, 3, 5, 14, 22, 45]]];

    const lottoController = new LottoController(
      INVESTMENT,
      WINNING_NUMBERS,
      BONUS_NUMBER
    );

    lottoController.purchaseAndCheck();
    const result = lottoController.getResult();

    expect(result).toEqual(EXPECTED_RESULT);
  });

  test('유저의 구입 금액과 결과를 비교하여 수익률을 반환한다.', () => {
    const INVESTMENT = 8000;
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    const lottoController = new LottoController(
      INVESTMENT,
      WINNING_NUMBERS,
      BONUS_NUMBER
    );

    lottoController.purchaseAndCheck();
    const profitRate = lottoController.getProfitRate();

    expect(profitRate).toBe(62.5);
  });
});
