import User from '../models/User.js';
import WinningLotto from '../models/WinningLotto.js';
import Checker from '../models/Checker.js';
import Calculator from '../models/Calculator.js';

class LottoController {
  #user;
  #winningLotto;
  #result = Array.from({ length: 5 }, () => new Array());

  constructor(investment, winningNumbers, bonusNumber) {
    this.#user = new User(investment);
    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  purchaseAndCheck() {
    this.#user.purchaseLottos();

    const checker = new Checker(
      this.#winningLotto,
      this.#user.getPurchasedLottos()
    );

    checker.checkAllLottos();

    this.#result = checker.getResult();
  }

  getResult() {
    return this.#result;
  }

  getProfitRate() {
    const calculator = new Calculator(this.#user.getInvestment(), this.#result);

    const profitRate = calculator.getProfitRate();

    return profitRate;
  }
}

export default LottoController;
