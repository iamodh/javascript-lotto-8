import LottoController from './controllers/LottoController.js';
s;
class App {
  async run() {
    const controller = new LottoController();
    await controller.start();
  }
}

export default App;
