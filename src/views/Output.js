import { Console } from '@woowacourse/mission-utils';
import { PRIZE_AMOUNT, PRIZE_CONDITION } from '../constants/lottoConfig.js';

class Output {
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

  printWinningResults(winningResult) {
    Console.print('당첨 통계');
    Console.print('---');
    for (let i = 4; i >= 0; i--) {
      Console.print(
        `${PRIZE_CONDITION[i]} (${PRIZE_AMOUNT[i].toLocaleString()}원) - ${
          winningResult[i].length
        }개`
      );
    }
  }

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  printError(error) {
    Console.print(error);
  }
}

export default Output;
