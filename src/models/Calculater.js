import { PRIZE_AMOUNT } from '../constants/lottoConfig';

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

    const profitRate = ((profit / this.#investment) * 100).toFixed(1);

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
