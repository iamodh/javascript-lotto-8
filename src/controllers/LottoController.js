import User from '../models/User.js';
import WinningLotto from '../models/WinningLotto.js';
import Checker from '../models/Checker.js';
import Calculator from '../models/Calculator.js';
import Input from '../views/Input.js';
import Output from '../views/Output.js';

class LottoController {
  #input;
  #output;
  #checker;
  #calculator;
  #user;
  #winningLotto;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
    this.#checker = new Checker();
    this.#calculator = new Calculator();
  }

  async start() {
    try {
      await this.#purchaseAndPrintLottos();
      await this.#inputWinningLotto();
      this.#checkLottosAndPrintResult();
    } catch (error) {
      this.#output.printError(error.message);
    }
  }

  async #purchaseAndPrintLottos() {
    const investment = await this.#input.getInvestment();

    this.#user = new User(investment);
    this.#user.purchaseLottos();

    this.#output.printPurchasedLottos(this.#user.getPurchasedLottos());
  }

  async #inputWinningLotto() {
    const winningNumbers = await this.#input.getWinningNumbers();
    const bonusNumber = await this.#input.getBonusNumber();

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  #checkLottosAndPrintResult() {
    const winningResult = this.#checker.checkWinningResult(
      this.#winningLotto,
      this.#user.getPurchasedLottos()
    );

    this.#output.printWinningResults(winningResult);

    const profitRate = this.#calculator.getProfitRate(
      this.#user.getInvestment(),
      winningResult
    );
    this.#output.printProfitRate(profitRate);
  }
}

export default LottoController;
