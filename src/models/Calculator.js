import { PRIZE_AMOUNT } from '../constants/lottoConfig.js';

class Calculator {
  #investment;
  #winningResult;

  constructor(investment, winningResult) {
    this.#investment = investment;
    this.#winningResult = winningResult;
  }

  getProfitRate() {
    const profit = this.#calculateProfit();
    if (profit === 0) return 0;

    // 소숫점 반환 결과를 Number로 저장하기 위함
    const profitRate = Math.round((profit / this.#investment) * 100 * 10) / 10;

    return profitRate;
  }

  #calculateProfit() {
    let profit = 0;
    for (let i = 0; i < this.#winningResult.length; i++) {
      if (this.#winningResult[i].length === 0) {
        continue;
      }
      profit += PRIZE_AMOUNT[i] * this.#winningResult[i].length;
    }

    return profit;
  }
}

export default Calculator;
