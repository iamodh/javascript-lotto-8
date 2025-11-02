import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '/src/constants/lottoConfig.js';
import Lotto from '/src/models/entities/Lotto.js';

class User {
  #purchasePrice;
  #lottos = [];

  constructor(purchasePrice) {
    this.#validatePrice(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  #validatePrice(purchasePrice) {
    if (purchasePrice % LOTTO_CONFIG.PRICE !== 0) {
      throw new Error(
        '[ERROR] 구매 금액은 로또의 가격으로 나누어 떨어져야 합니다.'
      );
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
