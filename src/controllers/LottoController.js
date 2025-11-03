import Calculator from '../models/services/Calculator.js';
import Checker from '../models/services/Checker.js';
import User from '../models/entities/User.js';
import WinningLotto from '../models/entities/WinningLotto.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #inputView;
  #outputView;
  #checker;
  #calculator;
  #user;
  #winningLotto;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#checker = new Checker();
    this.#calculator = new Calculator();
  }

  async start() {
    try {
      await this.#purchaseAndPrintLottos();
      await this.#getWinningLotto();
      this.#checkAndPrintWinningStatistic();
    } catch (error) {
      this.#outputView.printError(error.message);
    }
  }

  async #purchaseAndPrintLottos() {
    const purchasePrice = await this.#inputView.getPurchasePrice();
    this.#outputView.printNewLine();

    this.#user = new User(purchasePrice);
    this.#user.purchaseLottos();

    this.#outputView.printPurchasedLottos(this.#user.getPurchasedLottos());
    this.#outputView.printNewLine();
  }

  async #getWinningLotto() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    this.#outputView.printNewLine();

    const bonusNumber = await this.#inputView.getBonusNumber();
    this.#outputView.printNewLine();

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  #checkAndPrintWinningStatistic() {
    const winningStatistic = this.#checker.getWinningStatistic(
      this.#user.getPurchasedLottos(),
      this.#winningLotto
    );

    this.#outputView.printWinningStatistic(winningStatistic);

    const profitRate = this.#calculator.getProfitRate(
      this.#user.getPurchasePrice(),
      winningStatistic
    );
    this.#outputView.printProfitRate(profitRate);
  }
}

export default LottoController;
