import User from '../models/User.js';
import WinningLotto from '../models/WinningLotto.js';
import Checker from '../models/Checker.js';
import Calculator from '../models/Calculator.js';
import Input from '../views/Input.js';
import Output from '../views/Output.js';

class LottoController {
  #input;
  #output;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
  }

  async start() {
    try {
      const investment = await this.#input.getInvestment();

      const user = new User(investment);
      user.purchaseLottos();

      this.#output.printPurchasedLottos(user.getPurchasedLottos());

      const winningNumbers = await this.#input.getWinningNumbers();
      const bonusNumber = await this.#input.getBonusNumber();

      const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

      const checker = new Checker(winningLotto, user.getPurchasedLottos());

      checker.checkAllLottos();

      const result = checker.getResult();

      this.#output.printWinningResults(result);

      const calculator = new Calculator(user.getInvestment(), result);

      const profitRate = calculator.getProfitRate();

      this.#output.printProfitRate(profitRate);
    } catch (error) {
      this.#output.printError(error.message);
    }
  }
}

export default LottoController;
