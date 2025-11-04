import LottoController from './controllers/LottoController.js';
import Calculator from './models/services/Calculator.js';
import Checker from './models/services/Checker.js';
import LottoFactory from './models/services/LottoFactory.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const checker = new Checker();
    const calculator = new Calculator();
    const lottoFactory = new LottoFactory();

    const controller = new LottoController(
      inputView,
      outputView,
      checker,
      calculator,
      lottoFactory
    );
    await controller.start();
  }
}

export default App;
