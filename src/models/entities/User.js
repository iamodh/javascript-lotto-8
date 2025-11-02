import { Random } from '@woowacourse/mission-utils';
import LOTTO_CONFIG from '/src/constants/lottoConfig.js';
import Lotto from '/src/models/entities/Lotto.js';
import ERROR_MESSAGES from '/src/constants/errorMessages';

class User {
  #purchasePrice;
  #lottos = [];

  constructor(purchasePrice) {
    this.#validatePrice(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  #validatePrice(purchasePrice) {
    if (purchasePrice % LOTTO_CONFIG.PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PRICE);
    }
  }

  purchaseLottos() {
    const quantity = this.#purchasePrice / LOTTO_CONFIG.PRICE;
    for (let i = 0; i < quantity; i++) {
      const randomNumbers = this.#getRandomLottoNumbers();

      this.#lottos.push(new Lotto(randomNumbers));
    }
  }

  #getRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.NUMBER_RANGE_FROM,
      LOTTO_CONFIG.NUMBER_RANGE_TO,
      LOTTO_CONFIG.NUMBERS_COUNT
    );
  }

  getPurchasedLottos() {
    return this.#lottos;
  }

  getPurchasePrice() {
    return this.#purchasePrice;
  }
}

export default User;
