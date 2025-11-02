import { PRIZE_AMOUNT } from '/src/constants/lottoConfig.js';

class Calculator {
  getProfitRate(investment, winningStatistic) {
    const profit = this.#calculateProfit(winningStatistic);
    if (profit === 0) return 0;

    // 소숫점 반환 결과를 Number로 저장하기 위함
    const profitRate = Math.round((profit / investment) * 100 * 10) / 10;

    return profitRate;
  }

  #calculateProfit(winningStatistic) {
    let profit = 0;
    for (let i = 0; i < winningStatistic.length; i++) {
      if (winningStatistic[i].length === 0) {
        continue;
      }
      profit += PRIZE_AMOUNT[i] * winningStatistic[i].length;
    }

    return profit;
  }
}

export default Calculator;
