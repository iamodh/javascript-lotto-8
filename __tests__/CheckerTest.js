import Checker from '../src/models/Checker';

describe('당첨 확인 클래스 테스트', () => {
  test('사용자가 구매한 모든 로또의 당첨을 확인하고 당첨 결과 배열을 반환한다.', () => {
    const WINNING_LOTTO = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;

    // 6개 번호 일치
    const FIRST_PRIZE = [1, 2, 3, 4, 5, 6];
    // 5개 번호 + 보너스 번호 일치
    const SECOND_PRIZE = [1, 2, 3, 4, 5, 7];
    // 5개 번호 일치
    const THIRD_PRIZE = [1, 2, 3, 4, 5, 8];
    // 4개 번호 일치
    const FOURTH_PRIZE = [1, 2, 3, 4, 7, 8];
    // 3개 번호 일치
    const FIRST_FIFTH_PRIZE = [2, 3, 4, 7, 8, 9];
    const SECOND_FIFTH_PRIZE = [1, 2, 3, 7, 8, 9];
    const NO_PRIZE = [7, 8, 9, 10, 11, 12];

    const LOTTOS = [
      FIRST_PRIZE,
      SECOND_PRIZE,
      THIRD_PRIZE,
      FOURTH_PRIZE,
      FIRST_FIFTH_PRIZE,
      SECOND_FIFTH_PRIZE,
      NO_PRIZE,
    ];

    const RESULT = [
      [FIRST_PRIZE],
      [SECOND_PRIZE],
      [THIRD_PRIZE],
      [FOURTH_PRIZE],
      [FIRST_FIFTH_PRIZE, SECOND_FIFTH_PRIZE],
    ];

    const checker = new Checker(WINNING_LOTTO, BONUS_NUMBER, LOTTOS);

    expect(checker.checkAllLottos()).toEqual(RESULT);
  });
});
