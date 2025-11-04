import PRIZE_CONFIG from '../../constants/prizeConfig.js';

class Calculator {
  getProfitRate(purchasePrice, winningStatistic) {
    const profit = this.#calculateProfit(winningStatistic);
    if (profit === 0) return 0;

    // 소숫점 반환 결과를 Number로 저장하기 위함
    const profitRate = Math.round((profit / purchasePrice) * 100 * 10) / 10;

    return profitRate;
  }

  #calculateProfit(winningStatistic) {
    let profit = 0;

    for (const [rank, winners] of Object.entries(winningStatistic)) {
      profit += PRIZE_CONFIG.MONEY[rank] * winners.length;
    }

    return profit;
  }
}

export default Calculator;
