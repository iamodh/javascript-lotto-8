import Lotto from '../../src/models/entities/Lotto';
import User from '/src/models/entities/User';
import { getLogSpy, mockRandoms } from '/src/utils/mocks';
import Output from '/src/views/OutputView';

describe('출력 뷰 클래스 테스트', () => {
  test('구매한 로또들을 받아 각 번호를 오름차순으로 정렬한 후, 형식에 맞게 출력한다.', () => {
    const output = new Output();
    const logSpy = getLogSpy();

    const NUMBERS = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const lottos = [];
    for (number of NUMBERS) {
      lottos.push(new Lotto(number));
    }

    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];

    output.printPurchasedLottos(lottos);

    // logSpy가 log를 포함한 string을 매개변수로 호출되었는지 테스트
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('당첨 통계를 받아 형식에 맞게 출력한다.', () => {
    const WINNING_STATISTIC = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [[1, 3, 5, 14, 22, 45]],
    };

    const logSpy = getLogSpy();
    const output = new Output();

    output.printWinningStatistic(WINNING_STATISTIC);

    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    logs.forEach((log) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
    );
  });

  test('수익률을 받아 형식에 맞게 출력한다.', () => {
    const PROFIT_RATE = 62.5;
    const logSpy = getLogSpy();
    const log = '총 수익률은 62.5%입니다.';

    const output = new Output();
    output.printProfitRate(PROFIT_RATE);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
