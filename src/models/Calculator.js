import { PRIZE_AMOUNT } from '../constants/lottoConfig.js';

class Calculator {
  getProfitRate(investment, winningResult) {
    const profit = this.#calculateProfit(winningResult);
    if (profit === 0) return 0;

    // 소숫점 반환 결과를 Number로 저장하기 위함
    const profitRate = Math.round((profit / investment) * 100 * 10) / 10;

    return profitRate;
  }

  #calculateProfit(winningResult) {
    let profit = 0;
    for (let i = 0; i < winningResult.length; i++) {
      if (winningResult[i].length === 0) {
        continue;
      }
      profit += PRIZE_AMOUNT[i] * winningResult[i].length;
    }

    return profit;
  }
}

export default Calculator;
