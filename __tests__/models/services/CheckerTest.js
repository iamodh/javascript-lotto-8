import { mockRandoms } from '/src/utils/mocks';
import User from '/src/models/entities/User';
import WinningLotto from '/src/models/entities/WinningLotto';
import Checker from '/src/models/services/Checker';
import Lotto from '../../../src/models/entities/Lotto';

describe('당첨 확인 클래스 테스트', () => {
  test('사용자가 구매한 모든 로또의 당첨을 확인하고 당첨 통계를 반환한다.', () => {
    const PURCHASE_PRICE = 7000;
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
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
    // 꽝
    const NO_PRIZE = [7, 8, 9, 10, 11, 12];

    const NUMBERS = [
      FIRST_PRIZE,
      SECOND_PRIZE,
      THIRD_PRIZE,
      FOURTH_PRIZE,
      FIRST_FIFTH_PRIZE,
      SECOND_FIFTH_PRIZE,
      NO_PRIZE,
    ];
    const lottos = [];
    for (number of NUMBERS) {
      lottos.push(new Lotto(number));
    }

    const WINNING_STATISTIC = {
      1: [FIRST_PRIZE],
      2: [SECOND_PRIZE],
      3: [THIRD_PRIZE],
      4: [FOURTH_PRIZE],
      5: [FIRST_FIFTH_PRIZE, SECOND_FIFTH_PRIZE],
    };

    const winningLotto = new WinningLotto(WINNING_NUMBERS, BONUS_NUMBER);

    const checker = new Checker();

    expect(checker.getWinningStatistic(lottos, winningLotto)).toEqual(
      WINNING_STATISTIC
    );
  });
});
