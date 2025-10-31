import { Random } from '@woowacourse/mission-utils';
import LOTTO_CONFIG from '../constants/lottoConfig';
import Lotto from './Lotto';

class User {
  #investment;
  #lottos = [];

  constructor(investment) {
    this.#validateDivisibility(investment);
    this.#investment = investment;
  }

  #validateDivisibility(investment) {
    if (investment % LOTTO_CONFIG.PRICE !== 0) {
      throw new Error(
        '[ERROR] 투자 금액은 로또의 가격으로 나누어 떨어져야 합니다.'
      );
    }
  }

  purchaseLottos() {
    const quantity = this.#investment / LOTTO_CONFIG.PRICE;
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
}

export default User;
