import User from '../models/entities/User.js';
import WinningLotto from '../models/entities/WinningLotto.js';

class LottoController {
  #inputView;
  #outputView;
  #checker;
  #calculator;
  #lottoFactory;

  constructor(inputView, outputView, checker, calculator, lottoFactory) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#checker = checker;
    this.#calculator = calculator;
    this.#lottoFactory = lottoFactory;
  }

  async start() {
    try {
      const user = await this.#purchaseLottos();

      this.#outputView.printPurchasedLottos(user.getPurchasedLottos());
      this.#outputView.printNewLine();

      const winningLotto = await this.#getWinningLotto();

      const { winningStatistic, profitRate } = this.#getResult(
        user,
        winningLotto
      );

      this.#outputView.printWinningStatistic(winningStatistic);
      this.#outputView.printProfitRate(profitRate);
    } catch (error) {
      this.#outputView.printError(error.message);
    }
  }

  async #purchaseLottos() {
    const purchasePrice = await this.#inputView.getPurchasePrice();
    this.#outputView.printNewLine();

    const purchasedLottos = this.#lottoFactory.purchaseLottos(purchasePrice);
    const user = new User(purchasePrice, purchasedLottos);

    return user;
  }

  async #getWinningLotto() {
    const winningNumbers = await this.#inputView.getWinningNumbers();
    this.#outputView.printNewLine();

    const bonusNumber = await this.#inputView.getBonusNumber();
    this.#outputView.printNewLine();

    return new WinningLotto(winningNumbers, bonusNumber);
  }

  #getResult(user, winningLotto) {
    const winningStatistic = this.#checker.getWinningStatistic(
      user.getPurchasedLottos(),
      winningLotto
    );

    const profitRate = this.#calculator.getProfitRate(
      user.getPurchasePrice(),
      winningStatistic
    );

    return { winningStatistic, profitRate };
  }
}

export default LottoController;
