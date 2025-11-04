import LOTTO_CONFIG from '../../constants/lottoConfig.js';
import ERROR_MESSAGES from '../../constants/errorMessages.js';

class User {
  #purchasePrice;
  #lottos = [];

  constructor(purchasePrice, lottos) {
    this.#purchasePrice = purchasePrice;
    this.#valiadtePurchasePrice(purchasePrice);
    this.#lottos = lottos;
  }

  #valiadtePurchasePrice(purchasePrice) {
    if (purchasePrice % LOTTO_CONFIG.PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PRICE);
    }
  }

  setPurchasedLottos(lottos) {
    this.#lottos = lottos;
  }

  getPurchasedLottos() {
    return this.#lottos;
  }

  getPurchasePrice() {
    return this.#purchasePrice;
  }
}

export default User;
