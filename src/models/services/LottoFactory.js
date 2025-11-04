import { Random } from '@woowacourse/mission-utils';
import LOTTO_CONFIG from '../../constants/lottoConfig';
import Lotto from '../entities/Lotto';

class LottoFactory {
  purchaseLottos(purchasePrice) {
    const quantity = purchasePrice / LOTTO_CONFIG.PRICE;
    const lottos = [];
    for (let i = 0; i < quantity; i++) {
      const randomNumbers = this.#getRandomLottoNumbers();

      lottos.push(new Lotto(randomNumbers));
    }

    return lottos;
  }

  #getRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.NUMBER_RANGE_FROM,
      LOTTO_CONFIG.NUMBER_RANGE_TO,
      LOTTO_CONFIG.NUMBERS_COUNT
    );
  }
}

export default LottoFactory;
