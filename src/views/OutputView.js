import { Console } from '@woowacourse/mission-utils';
import PRIZE_CONFIG from '../constants/prizeConfig.js';

class OutputView {
  printPurchasedLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    for (const lotto of lottos) {
      const sortedNumbers = this.#sortLottoNumbers(lotto.getNumbers());
      Console.print(`[${sortedNumbers.join(', ')}]`);
    }
  }

  #sortLottoNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  printWinningStatistic(winningStatistic) {
    Console.print('당첨 통계');
    Console.print('---');

    for (let rank = PRIZE_CONFIG.COUNT; rank >= 1; rank--) {
      const condition = PRIZE_CONFIG.CONDITION[rank];
      const money = PRIZE_CONFIG.MONEY[rank].toLocaleString();
      const count = winningStatistic[rank].length;

      Console.print(`${condition} (${money}원) - ${count}개`);
    }
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  printError(error) {
    Console.print(error);
  }

  printNewLine() {
    Console.print('');
  }
}

export default OutputView;
